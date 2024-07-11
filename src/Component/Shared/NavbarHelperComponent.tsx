"use client";
import React from "react";
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
import { signOut } from "@/auth/helpers";
import LoginIcon from "@mui/icons-material/Login";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import LoginComponent from "../Login/LoginComponent";
import { CategoryTypes } from "@/types/category";
import Link from "next/link";

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

const Search = styled("div")(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  borderRadius: "50px",
  backgroundColor: "#eaf2ff",
  "&:hover": {
    backgroundColor: "#eaf2ff",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }: any) => ({
  // color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function NavbarHelper({
  isLoginUser,
  category,
}: {
  isLoginUser: any;
  category: CategoryTypes[];
}) {
  const history = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  console.log("user  ", isLoginUser);
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
      {/* <Grid xs={0} md={1} lg={1.1} xl={2}></Grid> */}
      <Grid sx={{ m: 0, p: 0 }} xs={12}>
        {/* <Grid sx={{ m: 0, p: 0 }} xs={12} md={10} lg={9.8} xl={8}> */}
        <AppBar sx={{ bgcolor: "#ffffff", m: 0, p: 0 }} position="static">
          <Grid sx={{ bgcolor: "white" }} container>
            <Grid xs={7}></Grid>

            <Grid sx={{ display: "flex" }} gap={2} xs={3}>
              <Typography
                gap={2}
                sx={{
                  fontSize: 11,
                  color: "#023359",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                <Link href={"/aboutus"}>About Us</Link>
              </Typography>

              <Typography
                gap={2}
                sx={{
                  fontSize: 11,
                  color: "#023359",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                <Link href={"/contactUs"}>Contact us</Link>
              </Typography>

              <Typography
                gap={2}
                sx={{
                  fontSize: 11,
                  color: "#023359",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                <Link href={"/privacyPolicy"}>Privacy Policy</Link>
              </Typography>

              <Typography
                gap={2}
                sx={{
                  fontSize: 11,
                  color: "#023359",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                <Link href={"/termCondition"}>Terms Condition</Link>
              </Typography>

              <Typography
                gap={2}
                sx={{
                  fontSize: 11,
                  color: "#023359",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                <Link href={"/faq"}>FAQ</Link>
              </Typography>
              <Typography
                gap={2}
                sx={{
                  fontSize: 11,
                  color: "#023359",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                <Link href={"/helpus"}>Tip Us</Link>
              </Typography>
            </Grid>
            <Grid xs={2}></Grid>
          </Grid>
          {/* <AppBar sx={{ bgcolor: "#d9078f", m: 0, p: 0 }} position="static"> */}
          {/* <Container sx={{ m: 0, p: 0 }} maxWidth="xl"> */}
          {/* <Toolbar disableGutters> */}
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
                      {/* <Grid container>
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
                          </Grid> */}
                    </List>
                    <List sx={{ bgcolor: "#bd047c" }}>
                      <Grid sx={{ mt: 4 }} container>
                        {pages.map((page: NavigationPages, index: number) => (
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
                        ))}
                      </Grid>
                    </List>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </Box>
          {/* large  */}
          {/* <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "flex" },
                  gap: 1,
                }}
              >
                {pages.map((page: NavigationPages, index: number) => (
                  <Button
                    key={index}
                    onClick={() => history.push(page.route)}
                    sx={{
                      // my: 2,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      // gap: 1,
                    }}
                  >
                    {page.icon}
                    <Typography sx={{ display: "inline", fontWeight: 600 }}>
                      {" "}
                      {page.title}
                    </Typography>
                  </Button>
                ))}
                {/* <TopSearch />  
              </Box> */}

          {/* </Toolbar> */}
          <Grid container>
            <Grid xs={0} md={1} lg={1.1} xl={2.3}></Grid>
            <Grid xs={12} md={10} lg={9.8} xl={7}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                  m: 2,
                  // textAlign: "center",
                }}
                // xs={}
              >
                <Grid
                // sx={{ display: "flex", justifyContent: "center", width: "100%" }}
                >
                  <Image
                    alt="logo"
                    // layout="responsive"
                    width={180}
                    height={20}
                    src="/logo.png"
                  />
                </Grid>
                <Grid>
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      position: "relative",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      marginLeft: 50,
                      marginTop:10
                    }}
                  >
                    <Search>
                      <button
                        style={{
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "none",
                          borderTopLeftRadius: "50px",
                          borderBottomLeftRadius: "50px",
                          color: "gray",
                          cursor: "pointer",
                          background: "#f0f5fe",
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
                        sx={{ width: "400px" }}
                      />
                    </Search>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* </Container> */}
        </AppBar>
        <AppBar sx={{ bgcolor: "#023359", m: 0, p: 0 }} position="static">
          <Grid container sx={{ m: 0, p: 0 }} xs={12}>
            <Grid xs={0} md={1} lg={1.1} xl={2.5}></Grid>
            <Grid xs={12} md={10} lg={9.8} xl={7}>
              {/* <Container sx={{ m: 0, p: 0 }} maxWidth="xl"> */}
              <Grid container>
                <Grid alignItems={"left"} container xs={11}>
                  {category?.map((value: CategoryTypes) => {
                    return (
                      <Grid sx={{ p: 1 }} xs={1} key={value.id}>
                        <Typography
                          sx={{
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            history.push(`/category/${value.title}`);
                          }}
                        >
                          {value.title}
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>
                <Grid textAlign={"end"} xs={1}>
                  <>
                    <Popover>
                      <PopoverTrigger>
                        <LoginIcon sx={{ mt: 1 }} />
                      </PopoverTrigger>
                      <PopoverContent className="w-[355px] md:w-[550px]">
                        <LoginComponent />
                      </PopoverContent>
                    </Popover>

                    <GroupAddIcon
                      sx={{ ml: 1.5, mt: 1 }}
                      onClick={() => history.push("/register")}
                    />
                  </>
                </Grid>
                {/* <Grid xs={4}>
                <ListItem
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    mt: 1,
                    color: "#e691c4",
                    fontWeight: 600,
                  }}
                  onClick={() => signOut()}
                >
                  {
                    isLoginUser ? <Typography sx={{ fontWeight: 600 }} textAlign="center">
                    Logout
                  </Typography> : null
                  }
                </ListItem>
              </Grid> */}
                {/* <Grid xs={4}>
                <ListItem
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    mt: 1,
                    color: "#e691c4",
                    fontWeight: 600,
                  }}
                  onClick={() => history.push("/")}
                >
                  <Typography sx={{ fontWeight: 600 }} textAlign="center">
                    Home
                  </Typography>
                </ListItem>
              </Grid>
              <Grid xs={4}>
                <ListItem
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    mt: 1,
                    color: "#e691c4",
                    fontWeight: 600,
                  }}
                  onClick={() => history.push("/news")}
                >
                  <Typography sx={{ fontWeight: 600 }} textAlign="center">
                    News
                  </Typography>
                </ListItem>
              </Grid>
              <Grid xs={4}>
                <ListItem
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    mt: 1,
                    color: "#e691c4",
                    fontWeight: 600,
                  }}
                  onClick={() => history.push("/aboutUs")}
                >
                  <Typography sx={{ fontWeight: 600 }} textAlign="center">
                    About Us
                  </Typography>
                </ListItem>
              </Grid> */}
              </Grid>
              {/* </Container> */}
            </Grid>
            <Grid xs={0} md={1} lg={1.1} xl={2.5}></Grid>
          </Grid>
        </AppBar>
      </Grid>
    </Grid>
  );
}
export default NavbarHelper;
