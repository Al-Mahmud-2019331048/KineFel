// This code defines a React application using React Router for navigation. It sets up routes for a landing page, orders page, login page, and signup page using the Routes and Route components from the react-router-dom library. Each route corresponds to a specific component that will be rendered when the associated URL path is visited.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Orders from "./components/Orders";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
 return (
  <div>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<LandingPage />} />
     <Route path="/orders" element={<Orders />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
    </Routes>
   </BrowserRouter>
  </div>
 );
};

export default App;
