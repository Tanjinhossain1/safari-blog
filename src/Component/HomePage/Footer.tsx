import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Divider,
  Container,
} from "@mui/material"; 
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

export default function Footer() {
  return (
    <Grid container>
      <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
      <Grid xs={12} md={10} lg={9.8} xl={8}>
        <Paper
          sx={{ p: 5,  borderTop: "10px solid #bf0080" }}
          elevation={2}
        >
          <Grid container>
            <Grid xs={12} sm={4} sx={{ mt: 3 }} md={4}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                Connect with us
              </Typography>
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                <Link
                style={{color:"black"}}
                  target="_blank"
                  href={"https://www.facebook.com/iloveyou.tanjin"}
                >
                  <FacebookIcon sx={{ fontSize: 30 }} />
                </Link>
                
                <Link
                style={{color:"black"}}
                  target="_blank"
                  href={"https://www.instagram.com/sktanjin/"}
                >
 
                <InstagramIcon sx={{ fontSize: 30, ml: 2 }} />
                </Link>
                <Link
                style={{color:"black"}}
                  target="_blank"
                  href={"https://youtube.com/@developercode76?si=3zKRJ0Ts_beAoIGF"}
                >
                   
                <YouTubeIcon sx={{ fontSize: 30, ml: 2 }} />
                </Link>

              </Typography>
            </Grid>

            <Grid xs={12} sm={4} sx={{ mt: 3 }} md={4}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                Help & Support
              </Typography>

              <Typography variant="h6" component="div">
                <Link style={{ color: "#2c2985" }} href={"/contactUs"}>
                  {" "}
                  Contact us
                </Link>
              </Typography>
            </Grid>

            <Grid xs={12} sm={4} sx={{ mt: 3 }} md={4}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                About Sell Safari
              </Typography>
              <Typography variant="h6" component="div">
                <Link style={{ color: "#2c2985" }} href={"/aboutUs"}>
                  {" "}
                  About Us
                </Link>
              </Typography>

              <Typography variant="h6" component="div">
                <Link style={{ color: "#2c2985" }} href={"/termCondition"}>
                  {" "}
                  Terms & Conditions
                </Link>
              </Typography>

              <Typography variant="h6" component="div">
                <Link style={{ color: "#2c2985" }} href={"/privacyPolicy"}>
                  {" "}
                  Privacy Policy
                </Link>
              </Typography>

            </Grid>
          </Grid>
                <Container sx={{width:"100%",mt:3}}>
                <Divider />
                </Container>
                
                <Container sx={{width:"100%",mt:3,display:"flex",justifyContent:"space-between"}}>
               <Typography>Copyright © Saltside Technologies</Typography>
               <Typography sx={{fontWeight:600,fontSize:23}}>Sell Safari</Typography>
                </Container>

        </Paper>
      </Grid>
      <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
    </Grid>
  );
}
