import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import popular from "./popular";
function PopularCategories() {
  return (
    <Box>
      <Typography
        variant="h3"
        mx={5}
        fontFamily="Raleway, sans-serif"
        fontWeight="700"
        color="#fff">
        Popular Categories
      </Typography>
      <Box
        mx={5}
        my={2}
        style={{
          display: "flex",
          gap: "15px",
        }}>
        {popular.map((item, index) => {
          return <div key={index}>{item.Svg}</div>;
        })}
      </Box>
    </Box>
  );
}

export default PopularCategories;
