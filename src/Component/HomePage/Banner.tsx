"use client";
import React from "react";
import { Grid, Paper, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { truncateText } from "@/utils/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { RecentArticleDataType } from "@/types/RecentArticle";
import RecentArticleComponent from "./RecentArticleComponent";
import { BrandTypes, CategoryTypes } from "@/types/category";

const HoverBox = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  width: "100%",
  height: "100%",
  "&:hover .title": {
    transform: "translateY(-200%)",
  },
  "&:hover .bigTitle": {
    transform: "translateY(-900%)",
  },
  "&:hover .description": {
    transform: "translateY(0)",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  width: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  color: "#fff",
  padding: theme.spacing(1),
  transition: "transform 0.3s ease-in-out",
  zIndex: 1,
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  textOverflow: "ellipsis",
}));

const Description = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  width: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  color: "#fff",
  padding: theme.spacing(1),
  paddingTop: "3px",
  transition: "transform 0.3s ease-in-out",
  transform: "translateY(100%)",
  zIndex: 0,
}));

const ContentBox = ({
  image,
  title,
  category,
  description,
  history,
  id,
  isBig,
  page,
  limit,
}: {
  image: string;
  category: string;
  title: string;
  description: string;
  id: string;
  history: any;
  page: string;
  limit: string;
  isBig?: boolean;
}) => (
  <HoverBox>
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isBig ? "470px" : "228px",
      }}
      onClick={() => {
        const joinTitle = title
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join("-");
        history.push(
          `/details/${id}/${category}/${joinTitle}?${new URLSearchParams({
            page: `${Number(page) + 1}`,
            limit: limit,
          })}`,
          {
            scroll: false,
          }
        );
      }}
    >
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
    </Box>
    <Title
      sx={{ fontSize: isBig ? 21 : 20, fontWeight: 600 }}
      className={isBig ? "bigTitle" : "title"}
    >
      {title}
    </Title>
    <Description sx={{ fontSize: isBig ? 12 : 11 }} className="description">
      {isBig ? description : truncateText(description, 190)}
    </Description>
  </HoverBox>
);

export default function Banner({
  articles,
  total,
  category,
  latestArticles,
  brands,
}: {
  articles: RecentArticleDataType[];
  total: number;
  category: CategoryTypes[];
  latestArticles: RecentArticleDataType[];
  brands: BrandTypes[];
}) {
  console.log("articles articles ", articles);
  const history = useRouter();

  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "3";
  return (
    <Grid container>
      <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
      <Grid xs={12} md={10} lg={9.8} xl={8}>
        <Paper sx={{ p: 2, mb: 2 }} elevation={2}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={8}>
              <ContentBox
                page={page}
                limit={limit}
                category={articles[0]?.category}
                id={articles[0]?.id}
                history={history}
                image={articles[0]?.image}
                title={articles[0]?.title}
                description={articles[0]?.description}
                isBig
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={12}>
                  <ContentBox
                    page={page}
                    limit={limit}
                    category={articles[1]?.category}
                    id={articles[1]?.id}
                    history={history}
                    image={articles[1]?.image}
                    title={articles[1]?.title}
                    description={articles[1]?.description}
                  />
                </Grid>
                <Grid item xs={6} sm={12}>
                  <ContentBox
                    page={page}
                    limit={limit}
                    category={articles[2]?.category}
                    id={articles[2]?.id}
                    history={history}
                    image={articles[2]?.image}
                    title={articles[2]?.title}
                    description={articles[2]?.description}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <RecentArticleComponent
            brands={brands}
            latestArticles={latestArticles}
            category={category}
            total={total}
            articles={articles}
          />
        </Paper>
      </Grid>
      <Grid xs={0} md={1} lg={1.1} xl={2}></Grid>
    </Grid>
  );
}
