import React from "react";
import { Box, Typography } from "@mui/material";
import Color from "color";
import { CardActionArea, Card, CardContent, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: "16px !important",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: {
    maxWidth: "300px !important",
    borderRadius: "16px !important",
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color("#0B8E94")
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#0B8E94 !important",
    padding: "1rem 1.5rem 1.5rem !important",
  },
  title: {
    fontSize: "2rem !important",
    color: "#000 !important",
    paddingBottom: "5px!important",
  },
  subtitle: {
    color: "#000",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
  image: {
    display: "flex !important",
    objectFit: "cover !important",
    height: "100%!important",
    borderRadius: "16px !important",
  },
  dot: {
    width: "8px",
    height: "8px",
    background: "#FFFFFF",
    borderRadius: "50%",
  },
}));

function RestaurantCard({ image, title, rating, avg_time }) {
  const styles = useStyles({ color: "#0B8E94" });
  return (
    <div>
      <CardActionArea className={styles.actionArea}>
        <Card className={styles.card}>
          <CardMedia
            component="img"
            className={styles.image}
            alt={title}
            height="140"
            image={image}
          />
          <CardContent className={styles.content}>
            <Typography
              className={styles.title}
              fontFamily="Raleway, sans-serif"
              fontWeight="700"
              variant={"h2"}>
              {title}
            </Typography>
            <Box gap={2} display="flex" alignItems="center">
              <Typography
                className={styles.subtitle}
                fontFamily="Raleway, sans-serif"
                fontWeight="700">
                ⭐ {rating}
              </Typography>
              <span className={styles.dot}>.</span>
              <Typography
                className={styles.subtitle}
                fontFamily="Raleway, sans-serif"
                fontWeight="700">
                Avg.time: {avg_time}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  );
}

export default RestaurantCard;
