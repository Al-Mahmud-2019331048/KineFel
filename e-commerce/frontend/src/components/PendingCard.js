import React from "react";

import VerticalStepper from "./VerticalStepper";
import { useState, useEffect } from "react";
import { Select, Option } from "@material-tailwind/react";
import axios from "axios";
import { toast } from "react-toastify";

import { Add, Remove, AttachMoney } from "@mui/icons-material";

const PendingCard = ({ item, suppliers }) => {
 console.log(item);

 let [date, time] = item.formattedDate.split(" ");
 date = date.slice(0, -1);
 const userType = localStorage.getItem("ecomm_user_type");
 const isAdmin = userType == 0;
 const isBuyer = userType == 1;
 const isSupplier = userType == 2;
 const total_price = item.total_price;
 const price = item.total_price / item.quantity;

 const [showDetails, setShowDetails] = useState(false);
 const [commisionRate, setCommisionRate] = useState(0);
 const [supplied, setSupplied] = useState(item.supplier_id != null);
 const [delivered, setDelivered] = useState(item.order_status == 2);
 const [supplier, setSupplier] = useState(
  item.supplier_id == null
   ? {
      name: null,
      phone: null,
     }
   : {
      name: item.supplier_name,
      phone: item.supplier_phone,
     }
 );
 const [formData, setFormData] = useState({
  ecomm_account_id: localStorage.getItem("bank_account_id"),
  ecomm_pin: localStorage.getItem("bank_pin_code"),
  supplier_account_id: null,
  supplier_price: null,
  supplier_id: null,
  supplier_name: null,
  supplier_phone: null,
 });
 const [status, setStatus] = useState(item.order_status);

 const decCommision = () => {
  setCommisionRate((commisionRate) =>
   commisionRate > 0 ? commisionRate - 1 : commisionRate
  );
 };

 const incCommision = () => {
  setCommisionRate((commisionRate) =>
   commisionRate < 100 ? commisionRate + 1 : commisionRate
  );
 };

 const handleDetail = () => {
  setShowDetails(!showDetails);
 };

 const changeHandler = (e) => {
  const supplier = suppliers.find(
   (supplier) => supplier.user_id === e.target.value
  );
  setFormData({
   ...formData,
   supplier_account_id: supplier.account_id,
   supplier_id: supplier.user_id,
   supplier_name: supplier.name,
   supplier_phone: supplier.phone,
  });
 };

 const markDone = async (e) => {
  try {
   //    console.log(item.order_id);
   const response = await axios.patch(
    `http://localhost:3000/api/v1/order/${item.order_id}`,
    {
     order_status: 2,
    }
   );
   setStatus(2);
   setDelivered(true);
   toast.success("Order delivered!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000, // Close the notification after 3 seconds
   });
  } catch (error) {
   console.log(error);
  }
 };

 const requestSupplier = async (e) => {
  e.preventDefault();

  const supplierPrice = total_price - (commisionRate / 100.0) * total_price;
  const req = {
   ...formData,
   supplier_price: supplierPrice,
  };
  try {
   console.log(item.order_id);
   const response = await axios.post(
    `http://localhost:3000/api/v1/order/${item.order_id}/supplier-req`,
    req
   );
   setSupplied(true);
   setSupplier({
    name: formData.supplier_name,
    phone: formData.supplier_phone,
   });
   setStatus(1);
   toast.success("Supplier requested!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000, // Close the notification after 3 seconds
   });
  } catch (error) {
   console.log(error);
  }
 };

 return (
  <div className="w-full rounded-lg p-3 border border-gray-400 border-dashed flex flex-col space-y-3">
   <div className="flex flex-row justify-between">
    <div className="w-[25%]">
     <h3 className="text-black font-bold">{item.product_name} </h3>
     <h3 className="text-gray-700">{item.order_id}</h3>
     {!isSupplier && (
      <div className="flex flex-row w-full justify-between">
       <h4 className="text-gray-700">Price</h4>
       <h4 className="text-gray-500">{price}</h4>
      </div>
     )}
     <div className="flex flex-row w-full justify-between border-b">
      <h4 className="text-gray-700">Quantity</h4>
      <h4 className="text-gray-500">x{item.quantity}</h4>
     </div>{" "}
     <div className="flex flex-row w-full justify-between">
      <h4 className="text-gray-700">Total</h4>
      <h4 className="text-gray-500">
       {!isSupplier ? item.total_price : item.supplier_price}
      </h4>
     </div>
     {isAdmin && (
      <>
       <div className="flex flex-row w-full justify-between border-b">
        <h4 className="text-gray-700">Supplier Price</h4>
        <h4 className="text-gray-500">- {item.supplier_price}</h4>
       </div>
       <div className="flex flex-row w-full justify-between">
        <h4 className="text-gray-700">Profit</h4>
        <h4 className="text-gray-500">
         {item.total_price - item.supplier_price}
        </h4>
       </div>
      </>
     )}
    </div>
    <div>
     <h3 className="font-medium">Order Time</h3>
     <h4 className="text-black">{date}</h4>
     <h4 className="text-gray-700">{time}</h4>
    </div>
    <div className="flex flex-col space-y-3">
     <button
      className="bg-black font-semibold py-1 px-5 rounded-lg text-white"
      onClick={handleDetail}>
      {showDetails ? "Hide Details" : "Show Details"}
     </button>
     {isSupplier && !delivered && (
      <button
       className="border border-black font-semibold py-1 px-5 rounded-lg text-black"
       onClick={markDone}>
       Mark Done
      </button>
     )}
    </div>
   </div>
   {showDetails && (
    <div className="flex flex-row justify-between border-t border-gray-400 border-dashed pt-3">
     <div>
      <h3 className="font-medium">Buyer Information</h3>
      <p className="text-gray-700">{item.buyer_name}</p>
      <p className="text-gray-700">{item.buyer_phone}</p>
      <p className="text-gray-700">{item.buyer_address}</p>
     </div>
     {supplied && (
      <div>
       <h3 className="font-medium">Seller Information</h3>
       <p className="text-gray-700">{supplier.name}</p>
       <p className="text-gray-700">{supplier.phone}</p>
      </div>
     )}
     {!supplied && isAdmin && (
      <div className="flex w-[25%] flex-col space-y-3">
       <select
        className="select select-bordered w-full max-w-xs bg-white p-2 text-black border-dashed border border-gray-400"
        onChange={changeHandler}>
        {suppliers.map((supplier) => (
         <option className="text-gray-700" value={supplier.user_id}>
          {supplier.name}
         </option>
        ))}
       </select>
       <div className="flex flex-row border border-dashed justify-evenly rounded-lg p-2 space-x-3 border-gray-400 text-gray-600">
        <div className="flex space-x-3">
         <button onClick={decCommision}>
          <Remove />
         </button>
         <p className="w-[40px] text-black justify-center text-center">
          {commisionRate} %
         </p>
         <button onClick={incCommision}>
          <Add />
         </button>
        </div>
        <div className="flex items-center justify-center space-x-2 border-l border-dashed border-gray-400 pl-3">
         <AttachMoney />
         {total_price - (commisionRate / 100.0) * total_price}
        </div>
       </div>
       <button
        className="border border-2 border-black text-black font-semibold font-semibol p-2 rounded-lg"
        onClick={requestSupplier}>
        Request Seller
       </button>
      </div>
     )}
     <div>
      {status == 0 && <VerticalStepper status={1} />}
      {status == 1 && <VerticalStepper status={2} />}
      {status == 2 && <VerticalStepper status={3} />}
     </div>
    </div>
   )}
  </div>
 );
};

export default PendingCard;
