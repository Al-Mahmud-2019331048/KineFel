import React from "react";

const DeliveredCard = ({ item }) => {
 const userType = localStorage.getItem("ecomm_user_type");
 const isAdmin = userType == 0;
 return (
  <div className="w-full rounded-lg p-3 border border-gray-400 border-dashed">
   <div className="flex flex-row justify-between">
    <div className="w-[25%]">
     <h3 className="text-black font-bold">{item.product_name} </h3>
     <h3 className="text-gray-700">{item.order_id}</h3>
     <div className="flex flex-row w-full justify-between mt-3">
      <h4 className="text-gray-700">Price</h4>
      <h4 className="text-gray-500">{item.total_price / item.quantity}</h4>
     </div>
     <div className="flex flex-row w-full justify-between border-b">
      <h4 className="text-gray-700">Quatity</h4>
      <h4 className="text-gray-500">x{item.quantity}</h4>
     </div>{" "}
     <div className="flex flex-row w-full justify-between">
      <h4 className="text-gray-700">Total</h4>
      <h4 className="text-gray-500">{item.total_price}</h4>
     </div>
     {isAdmin && (
      <>
       <div className="flex flex-row w-full justify-between border-b">
        <h4 className="text-gray-700">Supplier Price</h4>
        <h4 className="text-gray-500">-{item.supplier_price}</h4>
       </div>
       <div className="flex flex-row w-full justify-between">
        <h4 className="text-gray-700">Total profit</h4>
        <h4 className="text-gray-500">
         {item.total_price - item.supplier_price}
        </h4>
       </div>
      </>
     )}
    </div>
    <div>
     <div className="flex flex-col space-y-3">
      <div className="flex flex-row w-full justify-between space-x-5">
       <h4 className="text-black font-medium">Order Time</h4>
       <h4 className="text-gray-700">{item.formattedDate}</h4>
      </div>
      <div className="flex flex-row w-full justify-between space-x-5">
       <h4 className="text-black font-medium">Address</h4>
       <h4 className="text-gray-700 text-right">{item.buyer_address}</h4>
      </div>
     </div>
    </div>
    <div>
     <div className="flex flex-col space-y-3">
      <div>
       <div className="flex flex-row w-full justify-between space-x-5">
        <h4 className="text-black font-medium">Purchased by</h4>
        <h4 className="text-gray-700">{item.buyer_name}</h4>
       </div>
       {isAdmin && (
        <>
         <h4 className="text-gray-700 text-right">{item.buyer_id}</h4>
         <h4 className="text-gray-700 text-right">{item.buyer_phone}</h4>
        </>
       )}
      </div>
      <div>
       <div className="flex flex-row w-full justify-between space-x-5">
        <h4 className="text-black font-medium">Supplied by</h4>
        <h4 className="text-gray-700 text-right">{item.supplier_name}</h4>
       </div>
       {isAdmin && (
        <>
         <h4 className="text-gray-700 text-right">{item.supplier_id}</h4>
         <h4 className="text-gray-700 text-right">{item.supplier_phone}</h4>
        </>
       )}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default DeliveredCard;
