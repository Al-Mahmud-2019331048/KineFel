import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Transactions from "./components/Transactions";

const App = () => {
 return (
  <div>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/dashboard" element={<Transactions />} />
    </Routes>
   </BrowserRouter>
  </div>
 );
};

export default App;
