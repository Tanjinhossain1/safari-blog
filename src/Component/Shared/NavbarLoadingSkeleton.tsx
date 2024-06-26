"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar"; 
import { Grid, InputBase, ListItem, alpha, styled } from "@mui/material"; 
import { Skeleton } from "@/components/ui/skeleton";
 

function NavbarLoadingSkeleton() { 

  return (
    <Grid container>
      <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
      <Grid sx={{ m: 0, p: 0 }} xs={12} md={10} lg={9.8} xl={8}>
        <AppBar sx={{ bgcolor: "#ff5ec1", m: 0, p: 0 }} position="static">
          {/* <AppBar sx={{ bgcolor: "#d9078f", m: 0, p: 0 }} position="static"> */}
          <Skeleton className="w-full h-[100px] rounded-full" />
        </AppBar>
        <AppBar sx={{ bgcolor: "#f2f2f2", m: 0, p: 0 }} position="static">
        <Skeleton className="w-full h-[20px] rounded-full" />
        </AppBar>
      </Grid>
      <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
    </Grid>
  );
}
export default NavbarLoadingSkeleton;
