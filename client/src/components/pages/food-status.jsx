import React from 'react';
//make another drawer i.e. for after login
import Drawer from "../navbar/navbar.jsx";
//custom component
import SearchBox from "../navbar/search-box.jsx";
import * as menu from "../navbar/menu-items.jsx";

function FoodStatus(){
  return(
    <div>
    <Drawer content={"Food status here"} searchBox={<SearchBox/>} navItems={menu.loggedInMenuItems}>
    </Drawer>
    </div>
  )
}
export default FoodStatus;
