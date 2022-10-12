import React, { useState } from "react";

//MUI imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";

// MUI Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ image, hoverImage }) => {
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
        <CardMedia
          component="img"
          alt="product"
          height="140"
          image={imageUrl}
          onMouseOver={handleMouseover}
          onMouseOut={handleMouseout}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ fontSize: 14 }}
            textAlign="center"
          >
            Roundup...
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="p"
              sx={{ fontSize: 14, marginRight: 2, color: "green" }}
            >
              Rs.2,016
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: 12, textDecoration: "line-through" }}
            >
              Rs.2,625
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: 12, color: "gray" }}>265 Sold</Typography>
          <Button variant="contained" size="small">
            <ShoppingCartIcon sx={{ fontSize: 18 }} />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
