"use client"
import { Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';  
import { useRouter } from "next/navigation";
import OtherPageFooter from "@/Component/Shared/Footer";
import Navbar from "@/Component/Shared/Navbar";
import AboutUsComponent from "./_components/AboutUsComponent";

export default function AboutUs() {
    const history = useRouter()
  return (
    <Fragment>
      <Navbar />
      <AboutUsComponent />
    </Fragment>
  );
}
