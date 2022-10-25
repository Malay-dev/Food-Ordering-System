import React from "react";
//make another drawer i.e. for after login
import Drawer from "../navbar/navbar.jsx";
//custom component
import SearchBox from "../navbar/search-box.jsx";
import * as menu from "../navbar/menu-items.jsx";
import Restaurant from "../restaurant-list/restaurant-list.jsx";

function RestaurantList() {
  return (
    <div>
      <Drawer
        searchBox={<SearchBox />}
        navItems={menu.loggedInMenuItems}
        content={<Restaurant />}
        bg={"#393939"}
        drawerColor={"#393939"}
        menuItemColorMain={"#ffffff"}
        menuItemColorDrawer={"#ffffff"}>
        </Drawer>

    </div>
  );
}
export default RestaurantList;
