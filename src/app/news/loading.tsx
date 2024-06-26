import NavbarLoadingSkeleton from "@/Component/Shared/NavbarLoadingSkeleton";
// import { Skeleton } from "@/components/ui/skeleton";
import { Grid, Skeleton, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";



export default function Loading() {
  return (
    <>
      <NavbarLoadingSkeleton />
      <Grid container>
        <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
        <Grid sx={{ m: 0, p: 0 }} xs={12} md={10} lg={9.8} xl={8}>
          {/* <Skeleton className="w-full h-[100vh] " /> */}
          <Skeleton variant="rectangular"    sx={{height:"100vh",backgroundColor:"#d6d6d6"}} />
        </Grid>
        <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
      </Grid>
    </>
  );
}
