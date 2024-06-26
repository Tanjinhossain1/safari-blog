
import NewsPageLoadingSkeletonForPaper from "@/Component/LoadingSkeleton/NewsPageLoadingSkeleton";
import NavbarLoadingSkeleton from "@/Component/Shared/NavbarLoadingSkeleton";
import { Grid, Paper, Skeleton } from "@mui/material";
import React, { Fragment } from "react";

export default function Loading() {
  return (
    <Fragment>
     <NewsPageLoadingSkeletonForPaper />
    </Fragment>
  );
}
