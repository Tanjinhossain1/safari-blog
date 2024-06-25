"use client";
import { RecentArticleDataType } from "@/types/RecentArticle";
import { formatDate, truncateText } from "@/utils/utils";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function DisplayArticleComponent({
  data,
  asSmall,
}: {
  data: RecentArticleDataType;
  asSmall?: boolean;
}) {
  const history = useRouter();
  return (
    <Grid
      container
      sx={{
        borderBottom: asSmall ? "1px solid lightgray" : "none",
        pb: 3,
        pt: 2,
      }}
    >
      <Grid xs={asSmall ? 5 : 12} sm={5.5}>
        {/* <Image src={data.image} alt={data.title} layout="fill" objectFit="cover" /> */}
        <Image
          style={{ width: "100%", cursor: "pointer" }}
          alt=""
          src={data.image}
          layout="responsive"
          width={370}
          height={200}
          onClick={() => {
            const joinTitle = data.title
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join("-");
            history.push(`/details/${data.id}/${data.category}/${joinTitle}`);
          }}
        />
      </Grid>
      <Grid xs={0} sm={0.5}></Grid>
      <Grid xs={asSmall ? 7 : 12} sm={6}>
        <Typography
          sx={{
            fontSize: asSmall ? 14 : 18,
            fontWeight: 600,
            fontFamily: "revert",
            ml: 1,
            cursor: "pointer",
            ":hover": { color: "#c4007c" },
          }}
          onClick={() => {
            const joinTitle = data.title
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join("-");
            history.push(`/details/${data.id}/${data.category}/${joinTitle}`);
          }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 500,
            mt: asSmall ? 0.5 : 2,
            ml: asSmall ? 1 : 0,
          }}
        >
          {asSmall ? formatDate(data.createdAt) : null}
        </Typography>
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 500,
            mt: asSmall ? 0.5 : 2,
            ml: asSmall ? 1 : 0,
            display: {
              xs: asSmall ? "none":"block" ,
              sm: asSmall ? "none":"block" ,
              md: "block",
              lg: "block",
              xl: "block",
            } ,
          }}
        >
          {truncateText(data.description, 300)}
        </Typography>
         
          <Button
            variant="contained"
            onClick={() => {
              const joinTitle = data.title
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join("-");
              history.push(`/details/${data.id}/${data.category}/${joinTitle}`);
            }}
            sx={{
              display: {
                xs: asSmall ? "none":"block" ,
                sm: asSmall ? "none":"block" ,
                md: "block",
                lg: "block",
                xl: "block",
              } ,
              backgroundColor: "#bd047c", // Primary color
              mt: 1,
              color: "#ffffff",
              padding: "10px 20px",
              fontSize: "16px",
              textTransform: "none",
              marginBottom: "20px",
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
    </Grid>
  );
}
