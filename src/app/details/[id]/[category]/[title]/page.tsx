"use client";
import Footer from "@/Component/HomePage/Footer";
import Navbar from "@/Component/Shared/Navbar";
import { Breadcrumbs, Grid, Link, Paper, Typography } from "@mui/material";
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
              <Breadcrumbs sx={{fontSize:12}} aria-label="breadcrumb">
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
                <Typography sx={{fontSize:12}}>
                  {(params?.title as string)
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </Typography>
              </Breadcrumbs>
            </Paper>
          </Grid>
          <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
        </Grid>
        <Footer />
      </>
    </>
  );
}
