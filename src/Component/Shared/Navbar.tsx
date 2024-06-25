"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import {
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  Select,
  alpha,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavigationPages } from "@/types/Navbar";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Image from "next/image";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TopSearch from "../TopSearchBar/TopSearch";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

// const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const pages: NavigationPages[] = [
  {
    title: "Mobiles",
    route: "/category/Mobiles",
    icon: <Image alt="tips" height={20} width={20} src="/smartphone.png" />,
  },
  {
    title: "Jobs",
    route: "/category/Jobs",
    icon: <Image alt="tips" height={20} width={20} src="/suitcase.png" />,
  },
  {
    title: "Sports",
    route: "/category/Sports",
    icon: <Image alt="tips" height={20} width={20} src="/tournament.png" />,
  },
];

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const history = useRouter();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [state, setState] = React.useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("search  ", event);
    const search = event.target.search.value;
    history.push(`/search?search=${search}`);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const list = (
    <div
      role="presentation"
      //   onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      //   style={{ backgroundColor: "#d9078f" }}
    >
      <Container
        sx={{ display: "flex", justifyContent: "center", bgcolor: "white" }}
      >
        <CloseIcon
          onClick={toggleDrawer(false)}
          sx={{ fontSize: 35, textAlign: "center", color: "#d6002b" }}
        ></CloseIcon>
      </Container>
      <List sx={{ width: 350, bgcolor: "#bd047c", height: "100vh" }}>
        {pages.map((page: NavigationPages, index: number) => (
          <ListItem
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              mt: 1,
              borderBottom: "2px solid #d6008b",
              color: "white",
              fontWeight: 600,
            }}
            key={index}
            onClick={() => history.push(page.route)}
          >
            <Typography textAlign="center">{page.icon}</Typography>
            <Typography textAlign="center">{page.title}</Typography>
          </ListItem>
        ))}
        <div style={{ marginLeft: "30px" }}>{/* <TopSearch /> */}</div>
      </List>
    </div>
  );
  return (
    <Grid container>
      <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
      <Grid xs={12} md={10} lg={9.8} xl={8}>
        <AppBar sx={{ bgcolor: "#d9078f" }} position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer(true)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                  anchor="left"
                  open={state}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                  //   sx={{ width: 350, bgcolor: "#d9078f" }}
                >
                  {list}
                </SwipeableDrawer>
              </Box>
              {/* large  */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  gap: 3,
                }}
              >
                {pages.map((page: NavigationPages, index: number) => (
                  <Button
                    key={index}
                    onClick={() => history.push(page.route)}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {page.icon}
                    <Typography sx={{ display: "inline", fontWeight: 600 }}>
                      {" "}
                      {page.title}
                    </Typography>
                  </Button>
                ))}

                {/* <TopSearch /> */}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <form onSubmit={handleSubmit} style={{ position: "relative" }}>
                  <Search>
                    <button
                      style={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "none",
                        color: "inherit",
                        cursor: "pointer",
                        background: "none",
                        bottom:0,
                        padding: 0, // Ensures no extra padding
                        margin: 0, // Ensures no extra margin
                      }}
                      type="submit"
                      // onClick={handleButtonClick}
                    >
                      <SearchIcon />
                    </button>
                    <StyledInputBase
                      name="search"
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </form>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
      <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
    </Grid>
  );
}
export default Navbar;
