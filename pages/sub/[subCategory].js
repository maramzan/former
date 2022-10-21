import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// components
import ProductCard from "../../components/ProductCard";

// MUI imports
import { Typography, Grid } from "@mui/material";

// Data
import { sidebarData } from "../../assets/sidebarData";

const subCategory = () => {
  const router = useRouter();
  const { subCategory, category } = router.query;
  console.log(category);
  const obj = sidebarData.find((item) => item.title === category);
  console.log(obj);
  const data = obj?.subCategory?.find((item) => item.title === subCategory);

  return (
    <>
      <Typography
        textAlign={"center"}
        fontSize={35}
        fontWeight="700"
        marginTop={5}
        marginBottom={5}
      >
        {subCategory}
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ marginLeft: "auto", marginRight: "auto", width: "90vw" }}
      >
        {data?.products?.map((item, i) => (
          <Link key={i} href={"/productDetails"}>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <ProductCard image={item.image} hoverImage={item.hoverImage} />
            </Grid>
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default subCategory;
