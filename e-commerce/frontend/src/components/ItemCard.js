import React, { useState } from "react";
import axios from "axios";
import { Add, Remove, AttachMoney } from "@mui/icons-material";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ItemCard = ({ item }) => {
 const userType = localStorage.getItem("ecomm_user_type");
 const isLoggedIn = userType !== null;
 const isBuyer = userType == 1;
 const [itemCount, setItemCount] = useState(1);

 const removeItem = () => {
  setItemCount((itemCount) => (itemCount > 1 ? itemCount - 1 : itemCount));
 };

 const addItem = () => {
  setItemCount((itemCount) => itemCount + 1);
 };

 const setItem = (e) => {
  setItemCount(+e.target.value);
 };

 const placeOrder = async (e) => {
  e.preventDefault();

  const formData = {
   buyer_name: localStorage.getItem("ecomm_user_name"),
   buyer_phone: localStorage.getItem("ecomm_user_phone"),
   buyer_address: localStorage.getItem("ecomm_user_address"),
   buyer_id: localStorage.getItem("ecomm_account_id"),
   buyer_account_id: localStorage.getItem("bank_account_id"),
   buyer_pin: localStorage.getItem("bank_pin_code"),
   ecomm_account_id: "admin",
   product_name: item.productName,
   quantity: itemCount,
   total_price: parseFloat(itemCount * item.price),
  };

  try {
   const response = await axios.post(
    "http://localhost:3000/api/v1/order",
    formData
   );
   //    console.log(response.data.data);
   toast.success("Order In Process!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000, // Close the notification after 3 seconds
   });
  } catch (error) {
   console.log(error);
  }
 };

 return (
  <div className="rounded-lg border border-gray-200 w-full overflow-hidden">
   <img
    src={item.image}
    className="rounded-t-lg object-cover h-48 w-full"
    alt={item.productName}
   />
   <div className="p-2 flex flex-col space-y-2 h-full">
    <p className="border-b py-1 font-medium">{item.productName}</p>
    <p className="text-gray-500">{item.description}</p>
    <div className="p-2 rounded-lg border flex justify-center w-full">
     <AttachMoney /> {item.price}
    </div>
    {isBuyer && (
     <>
      <div className="flex flex-row border justify-evenly rounded-lg p-2 space-x-3 bg-gray-300 text-gray-700">
       <div className="flex space-x-3">
        <button onClick={removeItem}>
         <Remove />
        </button>
        <input
         placeholder="0"
         className="w-[40px] border border-dotted rounded-lg text-black justify-center text-center"
         value={itemCount}
         onChange={setItem}
        />
        <button onClick={addItem}>
         <Add />
        </button>
       </div>
       <div className="flex align-center justify-center p-2 space-x-2">
        <AttachMoney />
        {item.price * itemCount}
       </div>
      </div>
      <button
       className="bg-black text-white p-2 rounded-lg font-medium text-xl w-full"
       onClick={placeOrder}>
       Order
      </button>
     </>
    )}
   </div>
  </div>
 );
};

export default ItemCard;
