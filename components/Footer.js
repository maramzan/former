import React from "react";
import Image from "next/image";

// MUI imports
import { Grid, Box, Typography, TextField, Button } from "@mui/material";

// MUI Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import cards from "../assets/images/cards.png";

const information = [
  {
    text: "About Us",
  },
  {
    text: "Contact Us",
  },
  {
    text: "Return Policy",
  },
  {
    text: "Privacy Policy",
  },
  {
    text: "Terms & Conditions",
  },
];

const otherInfo = [
  {
    text: "FAQ's",
  },
  {
    text: "Coupons",
  },
  {
    text: "Careers",
  },
  {
    text: "Get Quote",
  },
  {
    text: "Site Map",
  },
];

const Footer = () => {
  return (
    <>
      <Grid container sx={{ padding: 10 }}>
        <Grid item xs={12} md={4} sx={{ marginTop: 3 }}>
          <IconList
            text="Sargodha, Punjab Pakistan."
            Icon={<LocationOnIcon sx={{ marginRight: 1, fontSize: 14 }} />}
          />
          <IconList
            text="info@kissanghar.pk"
            Icon={<MailOutlineIcon sx={{ marginRight: 1, fontSize: 14 }} />}
          />
          <IconList
            text="+923099878757"
            Icon={
              <PhoneAndroidOutlinedIcon sx={{ marginRight: 1, fontSize: 14 }} />
            }
          />
          <IconList
            text="+92483760982"
            Icon={<CallIcon sx={{ marginRight: 1, fontSize: 14 }} />}
          />
          <IconList
            text="+923099878757"
            Icon={<WhatsAppIcon sx={{ marginRight: 1, fontSize: 14 }} />}
          />
        </Grid>
        <Grid item xs={12} md={2} sx={{ marginTop: 3 }}>
          <Typography marginBottom={2} sx={{ fontSize: 17, fontWeight: "500" }}>
            Information
          </Typography>
          {information.map((item) => (
            <Typography marginBottom={2} sx={{ fontSize: 14 }}>
              {item.text}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} md={2} sx={{ marginTop: 3 }}>
          <Typography marginBottom={2} sx={{ fontSize: 17, fontWeight: "500" }}>
            Other Info
          </Typography>
          {otherInfo.map((item) => (
            <Typography marginBottom={2} sx={{ fontSize: 14 }}>
              {item.text}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} md={4} sx={{ marginTop: 3 }}>
          <Typography marginBottom={2} sx={{ fontSize: 17, fontWeight: "500" }}>
            Sign Up Newsletter
          </Typography>
          <Typography marginBottom={2} sx={{ fontSize: 14 }}>
            Get updates by subscribe our weekly newsletter
          </Typography>
          <Box sx={{ display: "flex" }}>
            <TextField
              placeholder="Enter Your Email"
              variant="outlined"
              sx={{ borderRadius: 0 }}
            />
            <Button variant="contained">subscribe</Button>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          backgroundColor: "#44914f",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 10,
          paddingRight: 10,
          flexDirection: { xs: "column", md: "row" },
          paddingTop: 2,
        }}
      >
        <Typography sx={{ fontSize: 14, color: "#fff" }}>
          Copyright © 2010-2022 Kissan Ghar . All Rights Reserved.
        </Typography>
        <Image src={cards} width={300} alt="shirt" height={80} />
      </Box>
    </>
  );
};

export default Footer;

const IconList = ({ text, Icon }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
      {Icon}
      <Typography fontSize={14}>{text}</Typography>
    </Box>
  );
};
