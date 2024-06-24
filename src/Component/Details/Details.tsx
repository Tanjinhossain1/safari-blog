"use client";
import Footer from "@/Component/HomePage/Footer";
import Navbar from "@/Component/Shared/Navbar";
import { RecentArticleDataType } from "@/types/RecentArticle";
import {
  Breadcrumbs,
  Button,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";


function formatText(text:string) {
    return text.replace(/\n/g, '<br />').replace(/ {2}/g, ' &nbsp;');
  }
export default function DetailsComponent({
  articleDetail,
}: {
  articleDetail: RecentArticleDataType;
}) {
  const params = useParams();
  console.log("articleDetail  ", articleDetail.content);

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
                <Grid xs={12} lg={7.5}>
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

                  <Image
                    style={{ marginTop: "20px" }}
                    src={articleDetail.image}
                    alt={articleDetail.title}
                    layout="responsive"
                    width={0}
                    height={0}
                  />
                  {articleDetail.content.map((block) => {
                    if (block.type === "paragraph") {
                      return ( 
                          <div
                          key={block.id}
                            dangerouslySetInnerHTML={{
                              __html: formatText(block.data.text),
                            }}
                          ></div> 
                         
                      );
                    } else if (block.type === "header") {
                      const TagLevel: any = `h${block.data.level}`;
                      return ( 
                          <TagLevel
                          key={block.id}
                            dangerouslySetInnerHTML={{
                              __html: block.data.text,
                            }}
                          ></TagLevel>
                         
                      );
                    } else if (block.type === "image") {
                      const TagLevel: any = `h${block.data.level}`;
                      return (
                        
                          <Image
                          key={block.id}
                            layout="responsive"
                            width={block.data.height}
                            height={block.data.height}
                            src={block.data.file.url}
                            alt="" 
                          ></Image>
                     
                      );
                    } else if (block.type === "list") {
                        const TagLevel: any = `h${block.data.level}`;
                        return (
                           
                             
                                block.data.style === "unordered" ? 
                                <ul key={block.id}>
                                  {block.data.items.map((item:any) => (
                                    <li style={{marginTop:"10px"}} key={item}>{item}</li>
                                  ))}
                                </ul>:  <ol key={block.id}>
                                {block.data.items.map((item:any) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ol>
                             
                          
                        );
                      }
                  })}
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
