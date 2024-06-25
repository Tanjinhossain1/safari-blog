"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Grid, InputBase, ListItem, alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavigationPages } from "@/types/Navbar";
import Image from "next/image";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { useRouter } from "next/navigation";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("search  ", event);
    const search = event.target.search.value;
    history.push(`/search?search=${search}`);
  };

  return (
    <Grid container>
      <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
      <Grid sx={{ m: 0, p: 0 }} xs={12} md={10} lg={9.8} xl={8}>
        <AppBar sx={{ bgcolor: "#ff5ec1", m: 0, p: 0 }} position="static">
          {/* <AppBar sx={{ bgcolor: "#d9078f", m: 0, p: 0 }} position="static"> */}
          <Container sx={{ m: 0, p: 0 }} maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ display: { xs: "flex", sm: "none" } }}>
                <NavigationMenu style={{ margin: 0, padding: 0 }}>
                  <NavigationMenuList style={{ margin: 0, padding: 0 }}>
                    <NavigationMenuItem style={{ margin: 0, padding: 0 }}>
                      <NavigationMenuTrigger
                        style={{ backgroundColor: "transparent" }}
                        onClick={handleToggle}
                      >
                        {isOpen ? (
                          <RemoveIcon className="icon animate-slideInFromTop " />
                        ) : (
                          <MenuIcon className="icon animate-slideInFromTop" />
                        )}
                      </NavigationMenuTrigger>

                      <NavigationMenuContent
                        style={{ borderRadius: "0px" }}
                        className="w-screen  animate-slideInFromTop bg-inherit m-0 p-0  "
                      >
                        <List sx={{ bgcolor: "#bd047c" }}>
                          <Grid container>
                            <Grid xs={4}>
                              <ListItem
                                sx={{
                                  textAlign: "center",
                                  display: "flex",
                                  alignItems: "center",
                                  mt: 1,
                                  borderRight: "2px solid #d6008b",
                                  color: "white",
                                  fontWeight: 600,
                                }}
                                onClick={() => history.push("/")}
                              >
                                <Typography textAlign="center">Home</Typography>
                              </ListItem>
                            </Grid>
                            <Grid xs={4}>
                              <ListItem
                                sx={{
                                  textAlign: "center",
                                  display: "flex",
                                  alignItems: "center",
                                  mt: 1,
                                  borderRight: "2px solid #d6008b",
                                  color: "white",
                                  fontWeight: 600,
                                }}
                                onClick={() => history.push("/news")}
                              >
                                <Typography textAlign="center">News</Typography>
                              </ListItem>
                            </Grid>
                          </Grid>
                        </List>
                        <List sx={{ bgcolor: "#bd047c" }}>
                          <Grid sx={{ mt: 4 }} container>
                            {pages.map(
                              (page: NavigationPages, index: number) => (
                                <Grid key={index} xs={4}>
                                  <ListItem
                                    sx={{
                                      textAlign: "center",
                                      display: "flex",
                                      alignItems: "center",
                                      mt: 1,
                                      borderRight: "2px solid #d6008b",
                                      color: "white",
                                      fontWeight: 600,
                                    }}
                                    onClick={() => history.push(page.route)}
                                  >
                                    <Typography textAlign="center">
                                      {page.icon}
                                    </Typography>
                                    <Typography textAlign="center">
                                      {page.title}
                                    </Typography>
                                  </ListItem>
                                </Grid>
                              )
                            )}
                          </Grid>
                        </List>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </Box>
              {/* large  */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "flex" },
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
                        bottom: 0,
                        padding: 0, // Ensures no extra padding
                        margin: 0, // Ensures no extra margin
                      }}
                      type="submit"
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
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <AppBar sx={{ bgcolor: "#f2f2f2", m: 0, p: 0 }} position="static">
          <Container sx={{ m: 0, p: 0 }} maxWidth="xl">
            <Grid container>
              <Grid xs={4}>
                <ListItem
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    mt: 1,
                    color: "#e691c4", 
                    fontWeight: 600,
                  }}
                  onClick={() => history.push("/")}
                >
                  <Typography sx={{fontWeight:600}} textAlign="center">Home</Typography>
                </ListItem>
              </Grid>
              <Grid xs={4}>
                <ListItem
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    mt: 1,
                    color: "#e691c4",
                    fontWeight: 600,
                  }}
                  onClick={() => history.push("/news")}
                >
                  <Typography sx={{fontWeight:600}} textAlign="center">News</Typography>
                </ListItem> 
              </Grid>
              <Grid xs={4}>
              <ListItem
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    mt: 1,
                    color: "#e691c4",
                    fontWeight: 600,
                  }}
                  onClick={() => history.push("/aboutUs")}
                >
                  <Typography sx={{fontWeight:600}} textAlign="center">About Us</Typography>
                </ListItem>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </Grid>
      <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
    </Grid>
  );
}
export default Navbar;
