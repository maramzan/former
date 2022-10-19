import React from "react";

//MUI imports
import { Box, Grid, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";

import { data } from "../assets/data";

const Categories = () => {
  return (
    <Box
      sx={{
        marginTop: 5,
        maxWidth: "90vw",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Categories
      </Typography>
      <Grid container spacing={2}>
        {data.map((item, i) => (
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <CategoryCard
              key={i}
              title={item.title}
              image={item.image}
              hoverImage={item.hoverImage}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
