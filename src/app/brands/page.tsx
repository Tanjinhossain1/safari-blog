import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { truncateText } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { RecentArticleDataType } from "@/types/RecentArticle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BrandTypes } from "@/types/category";
import { fetchBrands } from "@/services/articleServices";
import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/HomePage/Footer";
import BrandDisplayComponent from "@/Component/HomePage/BrandDisplay";

export default async function BrandPage() {
  const brands = await fetchBrands();
  return (
    <Fragment>
      <Navbar />
      <Grid container>
        <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
        <Grid xs={12} md={10} lg={9.8} xl={8}>
          <Paper sx={{ p: 2, mb: 2 }} elevation={2}>
           <BrandDisplayComponent brands={brands.data} />
          </Paper>
        </Grid>
        <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
      </Grid>
      <Footer />
    </Fragment>
  );
}
