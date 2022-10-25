import React from 'react';
import Navbar from "../navbar/navbar.jsx";
//custom component
import MainProfile from "../profile/main-profile/main-profile.jsx";
import SearchBox from "../navbar/search-box.jsx";
import * as menu from "../navbar/menu-items.jsx";

function Main(){
  return(
    <div>
    <Navbar content={<MainProfile/>} searchBox={null} navItems={menu.loggedInMenuItems} drawerColor={"#393939"} menuItemColorDrawer={"#ffffff"} menuItemColorMain={"#000000"}>
    </Navbar>
    </div>
  )
}
export default Main;
