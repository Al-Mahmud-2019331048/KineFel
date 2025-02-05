import { Link } from "react-router-dom";
import {
 ShoppingBag,
 ShoppingCart,
 AccountCircle,
 Login,
 Logout,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

const NavBar = () => {
 const [loggedIn, setLoggedIn] = useState(false);
 useEffect(() => {
  const ecomm_account_id = localStorage.getItem("ecomm_account_id");
  if (ecomm_account_id !== null) setLoggedIn(true);
  else setLoggedIn(false);
 }, []);
 const signOut = () => {
  localStorage.removeItem("ecomm_account_id");
  localStorage.removeItem("ecomm_user_name");
  localStorage.removeItem("ecomm_user_email");
  localStorage.removeItem("ecomm_user_phone");
  localStorage.removeItem("ecomm_user_address");
  localStorage.removeItem("ecomm_user_type");
  localStorage.removeItem("bank_account_id");
  localStorage.removeItem("bank_pin_code");
  setLoggedIn(false);
 };
 return (
  <>
   <div className="w-full bg-white flex justify-between align-center px-24 py-3 border-b-2 border-black text-2xl font-bold shadow-lg fixed top-0 z-50">
    <Link to="/">
     <div className="flex flex-row bg-white p-4 space-x-2 inline-flex items-center">
      <ShoppingBag />
      <span>KineFel</span>
     </div>
    </Link>
    <div className="flex flex-row bg-white p-4 space-x-4">
     {loggedIn && (
      <>
       <Link to="/orders">
        <ShoppingCart />
       </Link>
       <Link to="/profile">
        <AccountCircle />
       </Link>
       <Link to="/login">
        <button onClick={signOut}>
         <Logout />
        </button>
       </Link>
      </>
     )}

     {!loggedIn && (
      <Link to="/login">
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

export default NavBar;

// css navbar.css
