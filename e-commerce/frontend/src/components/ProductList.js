// The `ProductList` component displays a list of product cards with images, names, prices, and descriptions. It uses Material-UI icons and a clean layout for each item.

import React from "react";
import {
 AccessTimeFilled,
 RestaurantMenu,
 Favorite,
} from "@mui/icons-material";

import ItemCard from "./ItemCard";

const ProductList = () => {
 const items = [
  {
   key: 1,
   image:
    "https://www.startech.com.bd/image/cache/catalog/laptop/acer/nitro-5-an515-46-r3u8/nitro-5-an515-46-r3u8-01-500x500.webp",
   state: false,
   productName: "Acer Nitro 5 AN515-46-R3U8",
   price: "1500.00",
   description:
    "Acer Nitro 5 AN515-46-R3U8 Gaming Laptop comes powered by AMD Ryzen 5 6600H (16MB L3 Cache, 3.3GHz, Up to 4.5GHz) and 8GB DDR5 RAM.",
  },
  {
   key: 2,
   image:
    "https://www.startech.com.bd/image/cache/catalog/tablet-pc/apple/apple-ipad-space%20gray/apple-ipad-space%20gray-01-500x500.jpg",
   state: false,
   productName: "Apple iPad 10.9-Inch 10th Gen 64GB",
   price: "250.00",
   description:
    "The Apple iPad 10.9-Inch 10th Gen features a Retina display with a 2360 x 1640 resolution for crisp details and vivid colors. ",
  },
  {
   key: 3,
   image:
    "https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/24gn60r/24gn60r-01-500x500.webp",
   state: false,
   productName: 'LG 32GP850-B 32" UltraGear 165Hz',
   price: "300.00",
   description:
    "The LG 32GP850-B is a premium LG UltraGear Gaming Monitor. Built for gamers, it delivers the latest hardware, specs, sleek design, and sensory experience",
  },
 ];
 return (
  <div className="bg-white p-5 rounded-lg shadow-lg">
   <h1 className="border-b-2 text-2xl font-medium">Items</h1>
   <div className="flex flex-row space-x-5 mt-5">
    <ItemCard item={items[0]} />
    <ItemCard item={items[1]} />
    <ItemCard item={items[2]} />
   </div>
  </div>
 );
};

export default ProductList;
