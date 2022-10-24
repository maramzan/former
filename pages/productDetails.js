import React from "react";
import Image from "next/image";
import productImg from "../assets/images/Aartilo.png";

// MUI imports
import { Grid, Box, Typography, Button, Rating } from "@mui/material";

function productDetails() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "90vw",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 8,
        marginBottom: 8,
      }}
    >
      <Grid item md={5}>
        <Image src={productImg} alt="Product" width={500} height={500} />
      </Grid>
      <Grid item md={7} sx={{ paddingRight: { lg: 10 } }}>
        <Typography variant="h1" fontSize={24}>
          Elevest 24sc 100ml Insecticide Fmc Bifenthrin For All Worms Army Fall
          Worm
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Ratings: </Typography>
          <Rating name="read-only" value={3} readOnly sx={{ marginLeft: 1 }} />
        </Box>
        <Typography marginTop={3}>
          provides excellent control of a broad spectrum of more than 40 pests,
          including plant bugs, armyworms and stink bugs. contains maximum
          active ingredient ratio of industry-leading lepidopteran active,
          rynaxypyr (group 28), with the fast knockdown of superior pyrethroid,
          bifenthrin (group 3a), for broad spectrum and better overall control.
          excellent fit for growers fighting the worm complex and other insects
          simultaneously.
        </Typography>
        <Button variant="contained" sx={{ marginTop: 3 }}>
          Add to cart
        </Button>
      </Grid>
    </Grid>
  );
}

export default productDetails;
