import React, { useState } from "react";

// MUI imports
import {
  Collapse,
  List,
  ListItemText,
  ListItemButton,
  Grid,
  Typography,
  Box,
} from "@mui/material";

// MUI icons
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const sidebarData = [
  {
    title: "Pesticides",
  },
  {
    title: "Fertilizers",
  },
  {
    title: "Seeds",
  },
  {
    title: "Hybrid Seeds",
  },
  {
    title: "Spray Machinery",
  },
  {
    title: "Kitchen Gardening",
  },
  {
    title: "Tunnel Farming",
  },
  {
    title: "Live Stock",
  },
  {
    title: "Automation Irrigation",
  },
  {
    title: "Other Products",
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid
      item
      xs={12}
      md={3}
      sx={{
        width: "100%",
        height: { xs: 70, md: 530 },
        zIndex: 10,
        paddingRight: { md: 2 },
      }}
    >
      <List
        sx={{
          width: "100%",
          bgcolor: "white",
          padding: 0,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#44914f",
            cursor: "pointer",
            padding: 1.5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            color: "white",
          }}
          onClick={handleClick}
        >
          <MenuIcon />
          <Typography>All Categories</Typography>
          {open ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{ boxShadow: "0 0 7px rgba(0,0,0,0.1)" }}
          >
            {sidebarData.map((item) => (
              <ListItemButton>
                <ListItemText primary={item.title} />
                <KeyboardArrowRightIcon />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </Grid>
  );
};

export default Sidebar;
