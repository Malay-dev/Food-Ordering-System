import React from 'react';
import Navbar from "../navbar/navbar.jsx";
//custom component
import EditProfile from "../profile/edit-profile/edit-profile.jsx";
import SearchBox from "../navbar/search-box.jsx";
import * as menu from "../navbar/menu-items.jsx";

function Edit(){
  return(
    <div>
    <Navbar content={<EditProfile/>} searchBox={null} navItems={menu.loggedInMenuItems} drawerColor={"#04AFB6"} menuItemColor={"#000000"}>
    </Navbar>
    </div>
  )
}
export default Edit;
