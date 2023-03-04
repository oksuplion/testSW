import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Container } from "@mui/system";
import {
   Drawer,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   FormGroup,
   FormControlLabel,
   Switch,
   styled, useTheme,
   Hidden
} from "@mui/material";
import {ColorModeContext, colorDefinitions} from '../theme';
import ThemeSwitcher from "./shared/ThemeSwitcher";
import logo from "../media/ic-logo.png";

export const Navbar = () => {
   // const [checkedTheme, setCheckedTheme] = useState(false);
   const [mobileMenu, setMobileMenu] = useState({
      left: false,
   });
   const theme = useTheme();
   const mode = theme.palette.mode;
   const colors = colorDefinitions(mode)

   const toggleDrawer = (anchor, open) => (event) => {
      setMobileMenu({ ...mobileMenu, [anchor]: open });
   };


   const list = (anchor) => (
      <Box
         sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
         role="presentation"
         onClick={toggleDrawer(anchor, false)}
      >
         <List>
            {["Home", "Features", "Listed", "Contact"].map(
               (text, index) => (
                  <ListItem key={text} disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           {index === 0 && <HomeIcon />}
                           {index === 1 && <FeaturedPlayListIcon />}
                           {index === 2 && <ListAltIcon />}
                           {index === 3 && <ContactsIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                     </ListItemButton>
                  </ListItem>
               )
            )}
         </List>
         <ThemeSwitcher />
      </Box>
   );

   const NavLink = styled(Typography)(() => ({
      fontSize: "16px",
      color: "primary",
      cursor: "pointer",
      "&:hover": {
         textDecoration: "underline",
      },
   }));

   const NavbarLinksBox = styled(Box)(({ theme }) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing(3),
      [theme.breakpoints.down("md")]: {
         display: "none",
      },
   }));

   const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
      cursor: "pointer",
      display: "none",
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
         display: "block",
      },
   }));

   const NavbarContainer = styled(Container)(({ theme }) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(5),
      [theme.breakpoints.down("md")]: {
         padding: theme.spacing(2),
      },
   }));

   const NavbarLogo = styled("img")(({ theme }) => ({
      [theme.breakpoints.down("md")]: {
         display: "none",
      },
   }));

   return (
      <NavbarContainer>
         <Box display="flex" gap="2.5rem">
            <Box display="flex" alignItems="center" >
               <CustomMenuIcon onClick={toggleDrawer("left", true)} />
               <Drawer
                  anchor="left"
                  open={mobileMenu["left"]}
                  onClose={toggleDrawer("left", false)}
               >
                  {list("left")}
               </Drawer>
               <NavbarLogo width="100px" src={logo} alt="logo" />
            </Box>

            <NavbarLinksBox>
               <NavLink variant="body2" color={colors.black.DEFAULT}>Home</NavLink>
               <NavLink variant="body2" color={colors.black.DEFAULT}>Features</NavLink>
               <NavLink variant="body2" color={colors.black.DEFAULT}>Listed</NavLink>
               <NavLink variant="body2" color={colors.black.DEFAULT}>Contact</NavLink>
            </NavbarLinksBox>
         </Box>
         <Hidden mdDown>
            <ThemeSwitcher />
         </Hidden>
      </NavbarContainer >
   );
};

export default Navbar;

