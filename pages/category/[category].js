import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Grid, Typography } from "@mui/material";
import CategoryCard from "../../components/CategoryCard";

import { sidebarData } from "../../assets/sidebarData";

const category = () => {
  const router = useRouter();
  const { category } = router.query;
  const data = sidebarData.find((item) => item.title === category);

  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5)), url('https://www.fao.org/fileadmin/user_upload/codexalimentarius/photo-archive/Pesticide-spraying.jpg')",
          height: 250,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: 5,
          marginBottom: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          textAlign={"center"}
          fontSize={35}
          fontWeight="700"
          color={"white"}
        >
          {category}
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "90vw",
          paddingBottom: 20,
        }}
      >
        {data?.subCategory?.map((item, i) => (
          <Link
            key={i}
            href={{
              pathname: `/sub/${item.title}`,
              query: { category: category },
            }}
          >
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
