import React from "react";
//importing pages
import Home from "../components/pages/home.jsx";
import RestaurantList from "../components/pages/restaurant-list.jsx";
import RestaurantMenu from "../components/pages/restaurant-menu.jsx";
import OrderConfirm from "../components/pages/order-confirm.jsx";
import PaymentLink from "../components/pages/payment-link.jsx";
import FoodStatus from "../components/pages/food-status.jsx";


const paths=
[
  {name:"Home",link:"/",comp:<Home/>},
  {name:"Restaurant list",link:"/restaurant-list",comp:<RestaurantList/>},
  {name:"Restaurant Menu",link:"/restaurant-menu",comp:<RestaurantMenu/>},
  {name:"Order Confirmation",link:"/order-confirmation",comp:<OrderConfirm/>},
  {name:"Payment Link",link:"/payment-link",comp:<PaymentLink/>},
  {name:"Food Status",link:"/food-status",comp:<FoodStatus/>}
];

export default paths;
