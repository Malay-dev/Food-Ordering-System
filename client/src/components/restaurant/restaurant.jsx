import React from "react";
import PopularCategories from "./restaurant/popular-categories";
import Restaurants from "./restaurant/restaurants";
function Restaurant() {
  return (
    <div>
      <PopularCategories></PopularCategories>
      <Restaurants></Restaurants>
    </div>
  );
}

export default Restaurant;
