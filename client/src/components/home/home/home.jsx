import React from "react";
//custom components
import Grid from "./grid-2.jsx";
import Title from"./product-title.jsx";
import Illustration from "./product-illustration.jsx";
function HomeSection()
{
  return(
    <div>
      <Grid  one=<Title/> two=<Illustration/>/>
    </div>
  )
};
export default HomeSection;
