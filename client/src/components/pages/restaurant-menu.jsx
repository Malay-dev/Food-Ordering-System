import React from 'react';
//make another drawer i.e. for after login
import Drawer from "../navbar/navbar.jsx";
//custom component
import SearchBox from "../navbar/search-box.jsx";
import * as menu from "../navbar/menu-items.jsx";
import Restaurantmenu from "../restaurant-menu/restaurant-menu.jsx";

function RestaurantMenu(){
  return(
    <div>
      <Restaurantmenu/>
    </div>
  )
}
export default RestaurantMenu;
