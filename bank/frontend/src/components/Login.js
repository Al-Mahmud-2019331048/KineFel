import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import axios from "axios";

import MyNavBar from "./MyNavBar";

const Login = () => {
 const navigate = useNavigate();
 const [accountId, setAccountId] = useState("");
 const [password, setPassword] = useState("");

 useEffect(() => {
  const bank_account_id = localStorage.getItem("bank_account_id");
  if (bank_account_id != null) {
   navigate("/dashboard");
  }
 }, []);

 const handleAccountId = (e) => {
  setAccountId(e.target.value);
 };

 const handlePassword = (e) => {
  setPassword(e.target.value);
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  const formData = {
   account_id: accountId,
   pin_code: password,
  };
  console.log(formData);
  axios
   .post("http://localhost:5000/api/v1/auth/login", formData)
   .then((response) => {
    console.log(response.data);
    localStorage.setItem("bank_account_id", formData.account_id);
    localStorage.setItem("bank_balance", response.data.data.balance);

    // history.push("/dashboard");
    navigate("/dashboard");
   })
   .catch((error) => {
    console.error(error);
   });
 };

 return (
  <>
   <MyNavBar />
   <div className="flex">
    <div className="w-full m-auto flex flex-col space-y-3">
     <div className="flex items-center justify-center mt-20">
      <div className="bg-white p-8 rounded shadow-lg w-[35%]">
       <h2 className="text-2xl font-semibold mb-4">Login</h2>
       <form onSubmit={handleSubmit}>
        <div className="mb-4">
         <label
          htmlFor="account-id"
          className="block text-sm font-medium text-gray-700">
          Account Id
         </label>
         <input
          type="text"
          id="account-id"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-gray-500"
          onChange={handleAccountId}
          required
         />
        </div>
        <div className="mb-4">
         <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700">
          Password
         </label>
         <input
          type="password"
          id="password"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-gray-500"
          onChange={handlePassword}
          required
         />
        </div>
        <div className="flex flex-col space-y-3">
         <button
          type="submit"
          className="w-full bg-black font-bold text-white p-2 rounded-md">
          Log In
         </button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default Login;
