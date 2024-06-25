import { RecentArticleDataType } from '@/types/RecentArticle';
import { truncateText } from '@/utils/utils';
import { Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function DisplayArticleComponent({data}:{data: RecentArticleDataType }) {
    const history = useRouter()
  return (
    <>
         <Grid sx={{mb:5}} xs={12} sm={5.5}>
                  {/* <Image src={data.image} alt={data.title} layout="fill" objectFit="cover" /> */}
                    <Image
                      style={{ width: "100%", cursor: "pointer" }}
                      alt=""
                      src={data.image}
                      width={370}
                      height={200}
                      onClick={() => {
                        const joinTitle = data.title
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("-");
                          history.push(`/details/${data.id}/${data.category}/${joinTitle}`);
                       
                      }}
                    />
                  </Grid>
                  <Grid xs={0} sm={0.5}></Grid>
                  <Grid xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontSize: 18,
                        fontWeight: 600,
                        fontFamily: "revert",
                        cursor: "pointer",
                        ":hover": { color: "#c4007c" },
                      }}
                      onClick={() => {
                        const joinTitle = data.title
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("-");
                          history.push(`/details/${data.id}/${data.category}/${joinTitle}`);
                      }}
                    >
                      {data.title}
                    </Typography>
                    <Typography sx={{ fontSize: 13, fontWeight: 500, mt: 2 }}>
                      {truncateText(data.description, 300)}
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => {
                        const joinTitle = data.title
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("-");
                          history.push(`/details/${data.id}/${data.category}/${joinTitle}`);
                      }}
                      sx={{
                        backgroundColor: "#bd047c", // Primary color
                        mt: 1,
                        color: "#ffffff",
                        padding: "10px 20px",
                        fontSize: "16px",
                        textTransform: "none",
                        marginBottom:"20px",
                        transition:
                          "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
                        "&:hover": {
                          backgroundColor: "#018c2d", // Darker shade for hover
                          transform: "scale(1.05)",
                        },
                        "&:active": {
                          backgroundColor: "#4791db", // Lighter shade for active
                          transform: "scale(0.95)",
                        },
                      }}
                    >
                      Read More &gt;&gt;
                    </Button>
                  </Grid>
    </>
  )
}
