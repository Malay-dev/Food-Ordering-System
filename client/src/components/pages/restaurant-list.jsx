import React from 'react';
//make another drawer i.e. for after login
import Drawer from "../navbar/navbar.jsx";
//custom component
import SearchBox from "../navbar/search-box.jsx";
import * as menu from "../navbar/menu-items.jsx";

function RestaurantList(){
  return(
    <div>
    <Drawer content={<h1>Restaurant List</h1>} searchBox={<SearchBox/>} navItems={menu.loggedInMenuItems}>
    </Drawer>
    </div>
  )
}
export default RestaurantList;
