import React from "react";
import { Typography, Grid } from "@mui/material";
import { Box, Button } from "@mui/material";
import RestaurantCard from "./restaurant-card";
import restaurant_array from "./retaurant";
function Restaurants() {
  return (
    <Box style={{ overflow: "hidden" }}>
      <Typography
        variant="h3"
        mx={5}
        fontFamily="Raleway, sans-serif"
        fontWeight="700"
        color="#fff">
        Restaurants
      </Typography>
      <Grid
        container
        mx={5}
        my={3}
        columns={{ xs: 1, sm: 2, md: 4, lg: 4 }}
        spacing={3}>
        {restaurant_array.map((item, index) => {
          return (
            <Button key={index}>
              <RestaurantCard
                title={item.title}
                image={item.image}
                rating={item.rating}
                avg_time={item.avg_time}></RestaurantCard>
            </Button>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Restaurants;
