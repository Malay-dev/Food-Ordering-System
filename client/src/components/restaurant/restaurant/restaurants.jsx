import React from "react";
import { Stack, Typography, Divider } from "@mui/material";
import { Box, Button } from "@mui/material";
import RestaurantCard from "./restaurant-card";
import restaurant_array from "./retaurant";
function Restaurants() {
  return (
    <Box>
      <Typography
        variant="h3"
        mx={5}
        fontFamily="Raleway, sans-serif"
        fontWeight="700"
        color="#fff">
        Restaurants
      </Typography>
      <Stack
        mx={5}
        my={3}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}>
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
      </Stack>
    </Box>
  );
}

export default Restaurants;
