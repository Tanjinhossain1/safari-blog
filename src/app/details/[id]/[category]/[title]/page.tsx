"use client";
import Footer from "@/Component/HomePage/Footer";
import Navbar from "@/Component/Shared/Navbar";
import {
  Breadcrumbs,
  Button,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

export default function Details() {
  const params = useParams();
  console.log(params);
  
  return (
    <>
      <>
        <Navbar />
        <Grid container>
          <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
          <Grid xs={12} md={10} lg={9.8} xl={8}>
            <Paper sx={{ p: 2, mb: 2 }} elevation={2}>
              <Breadcrumbs sx={{ fontSize: 12 }} aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href={`/category/${params?.category}`}
                >
                  {params?.category}
                </Link>
                <Typography sx={{ fontSize: 12 }}>
                  {(params?.title as string)
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </Typography>
              </Breadcrumbs>
              <Button
                sx={{
                  mt: 2,
                  bgcolor: "#d9048b",
                  padding: "2px 8px",
                  fontSize: "12px",
                  minWidth: "50px",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "none",
                    bgcolor: "#c2047c", // Maintain the same background color on hover
                  },
                }}
                size="small"
                variant="contained"
              >
                {params?.category}
              </Button>
              <Grid container>
                <Grid xs={12} lg={7}>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: 35,
                      fontWeight: 550,
                      color: "#333333",
                    }}
                  >
                    {" "}
                    {(params?.title as string)
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </Typography>

                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
        </Grid>
        <Footer />
      </>
    </>
  );
}
