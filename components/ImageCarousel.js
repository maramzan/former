import { Grid } from "@mui/material";
import Head from "next/head";
import React from "react";
import Slider from "react-slick";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Grid
      item
      xs={12}
      md={9}
      sx={{ overflow: "hidden", height: { xs: 250, md: 530 } }}
    >
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Slider {...settings}>
        <div>
          <img
            src="https://scx2.b-cdn.net/gfx/news/2021/agriculture-1.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
        <div>
          <img
            src="https://assets.weforum.org/community/image/K8IsUZHGGK2ewqWDTwvjx9GracZgnVRFjqc2R5_boXE.jpg"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div>
          <img
            src="https://www.greenpeace.org/static/planet4-international-stateless/2021/10/49291478-pa110235-scaled.jpg"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </Slider>
    </Grid>
  );
};

export default ImageCarousel;
