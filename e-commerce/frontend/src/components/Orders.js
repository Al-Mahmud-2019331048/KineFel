// The `Orders` component displays pending and delivered orders. It fetches order data and supplier information (if applicable) from an API and renders them in separate sections using `PendingCard` and `DeliveredCard` components.

import React from "react";

import NavBar from "./NavBar";
import PendingCard from "./PendingCard";
import DeliveredCard from "./DeliveredCard";

import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
 const [orders, setOrders] = useState([]);
 const [suppliers, setSupplier] = useState([]);
 const user_type = localStorage.getItem("ecomm_user_type");

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await axios.get("http://localhost:3000/api/v1/order", {
     params: {
      user_id: localStorage.getItem("ecomm_account_id"),
      user_type: localStorage.getItem("ecomm_user_type"),
     },
    });
    if (user_type === "0") {
     const response2 = await axios.get(
      "http://localhost:3000/api/v1/auth/suppliers"
     );
      console.log(response2.data.data.suppliers);
     setSupplier(response2.data.data.suppliers);
    }
    // console.log(response.data.data.orders);
    const orders = response.data.data.orders;
    for (let i = 0; i < orders.length; i++) {
     const formattedDate = new Date(
      orders[i].created_at.seconds * 1000
     ).toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
     });
     orders[i].formattedDate = formattedDate;
    }
    setOrders(orders);
    // console.log(orders);
   } catch (error) {
    console.log("error");
   }
  };

  fetchData();
 }, []);

 return (
  <div className="mb-5">
   <NavBar />
   <div className="flex">
    <div className="w-8/12 m-auto flex flex-col space-y-3">
     <div className="bg-white p-5 rounded-lg shadow-lg">
      <h1 className="border-b-2 text-2xl font-medium">Pending Orders</h1>
      <div className="flex flex-col space-y-3 mt-5">
       {orders.map(
        (order) =>
         order.order_status !== 2 && (
          <PendingCard item={order} suppliers={suppliers} />
         )
       )}
      </div>
     </div>
     <div className="bg-white p-5 rounded-lg shadow-lg">
      <h1 className="border-b-2 text-2xl font-medium">Delivered Orders</h1>
      <div className="flex flex-col space-y-3 mt-5">
       {orders.map(
        (order) => order.order_status === 2 && <DeliveredCard item={order} />
       )}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Orders;
