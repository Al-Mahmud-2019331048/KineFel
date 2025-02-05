// It includes a navigation bar (NavBar), a banner section (Banner), and a list of products (ProductList). The layout is organized using Flexbox for responsive design, and the components are structured within a column layout. The LandingPage component is exported to be used in the application's routing configuration.

import NavBar from "./NavBar";
import Banner from "./Banner";
import ProductList from "./ProductList";

const LandingPage = () => {
 return (
  <div className="mb-5">
   <NavBar />
   <div className="flex">
    <div className="w-8/12 m-auto flex flex-col space-y-3">
     <Banner />
     <ProductList />
    </div>
   </div>
  </div>
 );
};

export default LandingPage;
