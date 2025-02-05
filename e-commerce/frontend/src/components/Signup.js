import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import NavBar from "./NavBar";

const Signup = () => {
 const navigate = useNavigate();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [userName, setUserName] = useState("");
 const [phone, setPhone] = useState("");
 const [address, setAddress] = useState("");

 const handleSignup = async (e) => {
  e.preventDefault();
  const formData = {
   name: userName,
   email: email,
   password: password,
   address: address,
   confirm_password: password,
   phone: phone,
   user_type: 1,
  };
  //   console.log(formData);
  try {
   const response = await axios.post(
    "http://localhost:3000/api/v1/auth/register",
    formData
   );
   localStorage.setItem("ecomm_account_id", response.data.data.user_id);
   localStorage.setItem("ecomm_user_name", response.data.data.name);
   localStorage.setItem("ecomm_user_email", response.data.data.email);
   localStorage.setItem("ecomm_user_phone", response.data.data.phone);
   localStorage.setItem("ecomm_user_address", response.data.data.address);
   localStorage.setItem("ecomm_user_type", response.data.data.user_type);

   toast.success(`Welcome ${localStorage.getItem("ecomm_user_name")}`, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000, // Close the notification after 3 seconds
   });
   
   navigate("/");
  } catch (err) {
   console.log(err);
   toast.error("Login failed!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000, // Close the notification after 3 seconds
   });
  }
 };

 return (
  <>
   <NavBar />
   <div className="flex">
    <div className="w-full m-auto flex flex-col space-y-3">
     <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-[35%]">
       <h2 className="text-2xl font-semibold mb-4">Signup</h2>
       <form onSubmit={handleSignup}>
        <div className="mb-4">
         <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700">
          Email
         </label>
         <input
          type="email"
          id="email"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
         />
        </div>
        <div className="mb-4">
         <label
          htmlFor="userName"
          className="block text-sm font-medium text-gray-700">
          UserName
         </label>
         <input
          type="text"
          id="userName"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-gray-500"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
         />
        </div>
        <div className="mb-4">
         <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700">
          Phone Number
         </label>
         <input
          type="text"
          id="phone"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-gray-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
         />
        </div>
        <div className="mb-4">
         <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700">
          Address
         </label>
         <input
          type="text"
          id="address"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-gray-500"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
         />
        </div>
        <div className="flex flex-col space-y-3">
         <button
          type="submit"
          className="w-full bg-black font-bold text-white p-2 rounded-md">
          Sign Up
         </button>
         <Link to="/login">
          <button className="w-full bg-white border-2 border-black font-bold text-black p-2 rounded-md">
           Log In
          </button>
         </Link>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default Signup;
