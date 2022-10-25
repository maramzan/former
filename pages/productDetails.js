import React from "react";
import Image from "next/image";
import productImg from "../assets/images/Aartilo.png";

// MUI imports
import { Grid, Box, Typography, Button, Rating } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

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

        <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
          <Typography sx={{ fontWeight: "700" }}>Ratings: </Typography>
          <Rating name="read-only" value={3} readOnly sx={{ marginLeft: 1 }} />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
          <Typography sx={{ fontWeight: "700" }}>Price:</Typography>
          <Typography sx={{ marginLeft: 1 }}>Rs. 180</Typography>
        </Box>

        <Typography marginTop={2}>
          Provides excellent control of a broad spectrum of more than 40 pests,
          including plant bugs, armyworms and stink bugs. contains maximum
          active ingredient ratio of industry-leading lepidopteran active,
          rynaxypyr (group 28), with the fast knockdown of superior pyrethroid,
          bifenthrin (group 3a), for broad spectrum and better overall control.
          excellent fit for growers fighting the worm complex and other insects
          simultaneously.
        </Typography>

        <Box sx={{ marginTop: 1, display: "flex", alignItems: "center" }}>
          <Button variant="outlined">
            <RemoveIcon />
          </Button>
          <Typography
            marginLeft={1}
            marginRight={1}
            sx={{
              backgroundColor: "#eee",
              paddingTop: 1,
              paddingBottom: 1,
              paddingLeft: 2,
              paddingRight: 2,
            }}
          >
            1
          </Typography>
          <Button variant="outlined">
            <AddIcon />
          </Button>
        </Box>
        <Button variant="contained" sx={{ marginTop: 3 }}>
          Add to cart
        </Button>
      </Grid>
    </Grid>
  );
}

export default productDetails;
