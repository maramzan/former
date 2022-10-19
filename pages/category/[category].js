import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Grid, Typography } from "@mui/material";
import CategoryCard from "../../components/CategoryCard";

import { sidebarData } from "../../assets/sidebarData";

const category = () => {
  const router = useRouter();
  const { category } = router.query;
  const data = sidebarData.find((item) => item.title === category);

  return (
    <>
      <Typography
        textAlign={"center"}
        fontSize={35}
        fontWeight="700"
        marginTop={5}
        marginBottom={5}
      >
        {category}
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ marginLeft: "auto", marginRight: "auto", width: "90vw" }}
      >
        {data?.subCategory?.map((item, i) => (
          <Link key={i} href="/">
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <CategoryCard
                title={item.title}
                image={item.image}
                hoverImage={item.hoverImage}
              />
            </Grid>
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default category;
