import React from "react";

// MUI imports
import { Grid, Box, Typography } from "@mui/material";

// MUI Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Grid container sx={{ padding: 10 }}>
      <Grid item xs={12} md={3}>
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
      <Grid item xs={12} md={3}></Grid>
      <Grid item xs={12} md={3}></Grid>
      <Grid item xs={12} md={3}></Grid>
    </Grid>
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
