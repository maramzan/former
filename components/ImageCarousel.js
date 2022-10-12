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
    <div style={{ width: "90vw", margin: "auto" }}>
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
            src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/12/19/Pictures/_c890ad0e-417b-11eb-a3f2-c7d95fc89ddb.jpg"
            style={{ width: "100%", height: 500 }}
          />
        </div>
        <div>
          <img
            src="https://www.awsmfarming.co.uk/wp-content/uploads/2019/10/AWSM-Contract-Farming.jpg"
            style={{ width: "100%", height: 500 }}
          />
        </div>
        <div>
          <img
            src="https://www.awsmfarming.co.uk/wp-content/uploads/2019/10/AWSM-Contract-Farming.jpg"
            style={{ width: "100%", height: 500 }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
