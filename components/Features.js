import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ReplyIcon from "@mui/icons-material/Reply";
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";

const Features = () => {
  return (
    <Grid
      spacing={2}
      container
      sx={{
        marginTop: 5,
        backgroundColor: "#eee",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 3,
        paddingBottom: 3,
      }}
    >
      <Feature
        title="FREE SHIPPING"
        text="Free shipping in all Pakistan At Hybrid Seeds or order above 25000"
        Icon={<AirplanemodeActiveOutlinedIcon fontSize="large" />}
      />
      <Feature
        title="SUPPORT 24/7"
        text="Contact us 24 hours a day, 7 days a week"
        Icon={<SupportOutlinedIcon fontSize="large" />}
      />
      <Feature
        title="15 DAYS RETURN"
        text="Simply return it within 15 days for an exchange"
        Icon={<ReplyIcon fontSize="large" />}
      />
      <Feature
        title="SECURE PAYMENT"
        text="We ensure secure payment"
        Icon={<CreditCardIcon fontSize="large" />}
      />
    </Grid>
  );
};

export default Features;

const Feature = ({ title, text, Icon }) => {
  return (
    <Grid item xs={6} md={3} sx={{ display: "flex" }}>
      <Box
        sx={{
          backgroundColor: "white",
          height: "fit-content",
          marginRight: 2,
          padding: 0.3,
          color: "red",
        }}
      >
        {Icon}
      </Box>
      <Box>
        <Typography gutterBottom fontSize={16}>
          {title}
        </Typography>
        <Typography fontSize={13}>{text}</Typography>
      </Box>
    </Grid>
  );
};
