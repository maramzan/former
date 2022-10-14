import React from "react";

// MUI imports
import { Grid, Typography, Box } from "@mui/material";

// Components
import ProductCard from "./ProductCard";

const ProductSection = ({ sectionTitle, products, bgColor }) => {
  return (
    <Box
      sx={{
        marginTop: 5,
        width: "90vw",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom>
        {sectionTitle}
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: bgColor,
          paddingRight: 2,
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        {products?.map((item) => (
          <ProductCard image={item.image} hoverImage={item.hoverImage} />
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSection;
