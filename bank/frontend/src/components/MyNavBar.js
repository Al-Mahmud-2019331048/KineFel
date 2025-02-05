import { Link } from "react-router-dom";

import { AccountBalance, Login, Logout } from "@mui/icons-material";
import { useEffect, useState } from "react";

import Balance from "./Balance";

const MyNavBar = () => {
 const [loggedIn, setLoggedIn] = useState(false);
 useEffect(() => {
  const bank_account_id = localStorage.getItem("bank_account_id");
  if (bank_account_id !== null) setLoggedIn(true);
  else setLoggedIn(false);
 }, []);
 const signOut = () => {
  localStorage.removeItem("bank_account_id");
  localStorage.removeItem("bank_balance");
  setLoggedIn(false);
 };
 return (
  <>
   <div className="w-full bg-white flex justify-between align-center px-24 py-3 border-b-2 border-black text-2xl font-bold shadow-lg fixed top-0 z-50">
    <Link to={loggedIn ? "/dashboard" : "/"}>
     <div className="flex flex-row bg-white p-4 space-x-2 inline-flex items-center">
      <AccountBalance />
      <span>Bank</span>
     </div>
    </Link>
    <div className="flex flex-row bg-white p-4 space-x-4">
     {loggedIn && (
      <>
       <Link to="/">
        <button onClick={signOut}>
         <Logout />
        </button>
       </Link>
      </>
     )}

     {!loggedIn && (
      <Link to="/">
       <button>
        <Login />
       </button>
      </Link>
     )}
    </div>
   </div>
   <div className="mt-[100px]"></div>
  </>
 );
};

export default MyNavBar;
