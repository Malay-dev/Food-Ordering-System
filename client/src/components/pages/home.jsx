import React from 'react';
import Navbar from "../navbar/navbar.jsx";
//custom component
import HomeSection from "../home/home/home.jsx";
import SearchBox from "../navbar/search-box.jsx";
import * as menu from "../navbar/menu-items.jsx";

function Home(){
  return(
    <div>
    <Navbar content={<HomeSection/>} searchBox={null} navItems={menu.homeMenuItems}>
    </Navbar>
    </div>
  )
}
export default Home;
