import React, { useState } from "react";

//MUI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

const CategoryCard = ({ title, image, hoverImage }) => {
  const [imageUrl, setImageUrl] = useState(image);

  const handleMouseover = () => {
    setImageUrl(hoverImage);
  };

  const handleMouseout = () => {
    setImageUrl(image);
  };

  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={title}
            onMouseOver={handleMouseover}
            onMouseOut={handleMouseout}
          />
          <CardContent>
            <Typography variant="h6" sx={{ fontSize: 13, fontWeight: "700" }}>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CategoryCard;
