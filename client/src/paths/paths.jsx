import React from "react";
//importing pages
import Home from "../components/pages/home.jsx";
import RestaurantList from "../components/pages/restaurant-list.jsx";
import RestaurantMenu from "../components/pages/restaurant-menu.jsx";
import OrderConfirm from "../components/pages/order-confirm.jsx";
import PaymentLink from "../components/pages/payment-link.jsx";
import FoodStatus from "../components/pages/food-status.jsx";
import MainProfile from "../components/pages/main-profile.jsx";
import EditProfile from "../components/pages/edit-profile.jsx";

const paths=
[
  {name:"Home",link:"/",comp:<Home/>},
  {name:"Restaurant list",link:"/restaurant-list",comp:<RestaurantList/>},
  {name:"Restaurant Menu",link:"/restaurant-menu",comp:<RestaurantMenu/>},
  {name:"Order Confirmation",link:"/order-confirmation",comp:<OrderConfirm/>},
  {name:"Payment Link",link:"/payment-link",comp:<PaymentLink/>},
  {name:"Food Status",link:"/food-status",comp:<FoodStatus/>},
  {name:"Main Profile",link:"/user-profile",comp:<MainProfile/>},
  {name:"Edit Profile",link:"/user-profile-edit",comp:<EditProfile/>}
];

export default paths;
