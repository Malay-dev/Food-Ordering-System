import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//custom components
import HomeSection from "../home//home/home.jsx";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#04AFB6",
        height: "150vh",
        fontWeight: "bold",
      }}>
      {/*Logo Name*/}
      <Typography variant="h6" sx={{ my: 4, color: "#ffffff" }}>
        VFOOD
      </Typography>
      <Divider />
      <List sx={{ fontWeight: "bold" }}>
        {props.navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={{ fontWeight: "bold!important" }}>
            <ListItemButton
              sx={{
                textAlign: "center",
                position: "relative",
                left: "10",
                fontWeight: "bold!important",
              }}>
              <ListItemText
                primary={item}
                sx={{ fontWeight: "bold!important" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: props.bg ? props.bg : "#04AFB6",
          boxShadow: "none",
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          {/*Actual logo name here*/}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            VFOOD
          </Typography>
          {/*Menu list names here */}
          <Box
            sx={{ marginRight: "4rem", display: { xs: "none", sm: "block" } }}>
            {props.navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#000000!important",
                  marginLeft: 5,
                  fontWeight: "bold",
                }}>
                {item}
              </Button>
            ))}
          </Box>
          {/*Search box component here*/}
          {props.searchBox}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            fontWeight: "bold!important",
          }}>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          backgroundColor: props.bg ? props.bg : "#04AFB6",
          height: "150vh",
          width: { lg: "100vw" },
        }}>
        <Toolbar />
        {/*Body of page*/}
        <Box
          sx={{
            marginRight: 0,
            marginLeft: 0,
            marginTop: 3,
            backgroundColor: props.bg,
          }}>
          {props.content}
        </Box>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
