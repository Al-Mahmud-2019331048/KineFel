import React from "react";

// amount, receiver_name, sender_id, sender_name, transaction_id, created_at, receiver_id
const TransactionCard = ({ transaction }) => {
 return (
  <div className="w-full rounded-lg p-3 border border-gray-400 border-dashed">
   <div className="flex flex-row justify-between">
    <div className="w-[25%]">
     <h3 className="text-black font-bold">Transaction</h3>
     <h3 className="text-black">{transaction.transaction_id} </h3>
     <h3 className="text-gray-700">{transaction.amount}</h3>
    </div>
    <div className="w-[25%]">
     <h3 className="text-black font-bold">Sender</h3>
     <h3 className="text-black">{transaction.sender_id} </h3>
     <h3 className="text-gray-700">{transaction.sender_name}</h3>
    </div>
    <div className="w-[20%]">
     <h3 className="text-black font-bold">Receiver</h3>
     <h3 className="text-black">{transaction.receiver_id} </h3>
     <h3 className="text-gray-700">{transaction.receiver_name}</h3>
    </div>
   </div>
  </div>
 );
};

export default TransactionCard;
