import { MonetizationOn } from "@mui/icons-material";

const Balance = ({ balance }) => {
 return (
  <div className="fixed right-10 bottom-20 bg-white border border-2 border-dashed border-gray-700 shadow-lg p-4 rounded-md">
   <div className="flex flex-row justify-between items-center space-x-5">
    <div className="text-2xl">
     <MonetizationOn />
    </div>
    <div className="flex flex-col">
     <p className="text-sm font-semibold">Balance</p>
     <p className="text-xs font-medium">{balance}</p>
    </div>
   </div>
  </div>
 );
};

export default Balance;
