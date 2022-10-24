import React from "react";
import { Typography } from "@mui/material";
import { Box, Grid, Button } from "@mui/material";
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
        sx={{ flexGrow: 1 }}
        mx={5}
        my={2}
        style={{
          display: "grid",
          flexDirection: "row",
          gap: "15px",
        }}>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 3 }}
          columns={{ xs: 2, sm: 3, md: 6 }}>
          {popular.map((item, index) => {
            return (
              <Grid item key={index}>
                <Button key={index}>{item.Svg}</Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default PopularCategories;
