import Balance from "./Balance";
import MyNavBar from "./MyNavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import TransactionCard from "./TransactionCard";

const Transactions = () => {
 const balance = localStorage.getItem("bank_balance");
 const bank_account_id = localStorage.getItem("bank_account_id");
 const [transactions, setTransaction] = useState([]);
 useEffect(() => {
  axios
   .get(
    `http://localhost:5000/api/v1/transaction?account_id=${bank_account_id}`
   )
   .then((response) => {
    console.log(response.data.data);
    setTransaction(response.data.data);
   })
   .catch((error) => {
    console.error(error);
   });
 }, []);
 return (
  <div className="mb-5">
   <MyNavBar />
   <Balance balance={balance} />
   <div className="w-7/12 m-auto flex flex-col space-y-3">
    <div className="bg-white p-5 rounded-lg shadow-lg">
     <h1 className="border-b-2 text-2xl font-medium">Transactions</h1>
     <div className="flex flex-col space-y-3 mt-5">
      {transactions.map((transaction) => (
       <TransactionCard transaction={transaction} />
      ))}
     </div>
    </div>
   </div>
  </div>
 );
};

export default Transactions;
