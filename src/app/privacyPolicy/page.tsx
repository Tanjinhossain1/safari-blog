"use client"
import { Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';  
import { useRouter } from "next/navigation";
import OtherPageFooter from "@/Component/Shared/Footer";

export default function AboutUs() {
    const history = useRouter()
  return (
    <Grid container>
      <Container
        sx={{
          width: {
            xs: "100%", // 80% width on extra-small screens
            sm: "100%", // 70% width on small screens
            md: "100%", // 60% width on medium screens
            lg: "100%", // 50% width on large screens
            xl: "100%", // 40% width on extra-large screens
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container sx={{mt:4}}>
            <Container onClick={()=>history.back()} sx={{width:"100%",bgcolor:"#eb94d7",p:1}}>
            <ArrowBackIcon  sx={{fontSize:30,color:"whitesmoke"}} />
            </Container>
          <Paper sx={{ textAlign: "center", p: 5 }} elevation={2}>
            <Image
              src="/compliant.png"
              alt=""
              width={350}
              height={350}
            />
            <Typography sx={{ mt: 3, fontSize: 25, fontWeight: 600 }}>
            Privacy Policy
            </Typography>
            <Typography
              sx={{
                mt: 1,
                fontSize: 16,
                fontWeight: 500,
                width: "60%",
                mx: "auto",
              }}
            >
              In order for the website to provide a safe and useful service, it is important for Sell Safari to collect, use, and share personal information.


            </Typography> 
          </Paper>
        </Container>
      </Container>
      <div style={{marginTop:5,width:"100%",}}>
      <OtherPageFooter />
      </div>
    </Grid>
  );
}
