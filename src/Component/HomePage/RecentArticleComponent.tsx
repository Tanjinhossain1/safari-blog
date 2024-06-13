"use client";
import React, { Fragment, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import {
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  Select,
  alpha,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavigationPages } from "@/types/Navbar";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Image from "next/image";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TopSearch from "../TopSearchBar/TopSearch";
import CloseIcon from "@mui/icons-material/Close";
import { SAMPLE_DATA } from "./RecentArticleDataType";
import { RecentArticleDataType } from "@/types/RecentArticle";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { truncateText } from "@/utils/utils";

export default function RecentArticleComponent({
  articles,
  total
}: {
  articles: RecentArticleDataType[];  
  total:number
}) {
     
  const [isHideLoadMore, setIsHideLoadMore] = useState<boolean>(false);
  const history = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "3";

  // Function to load more articles
  const loadMoreArticles = async () => { 

    history.push(
      `/?${new URLSearchParams({
        page: page,
        limit: `${Number(limit) + 2}`,
      })}`,
      {
        scroll: false,
      }
    );
  };

  useEffect(()=>{
    console.log('articles.length  ', articles.length,total)
    if(articles.length  === total){
        setIsHideLoadMore(true)
    }
  },[articles.length])
  return (
    <Grid sx={{ mt: 4 }} container>
      <Grid xs={12} md={8}>
        <Container sx={{ bgcolor: "#bd047c", p: 1 }}>
          <Typography sx={{ fontSize: 18, fontWeight: 600, color: "#f5f5f5" }}>
            Recent Article
          </Typography>
        </Container>
        <Grid sx={{ mt: 2 }} container>
          {articles &&
            articles.map((data: RecentArticleDataType) => {
              return (
                <Fragment key={data.id}>
                  <Grid xs={12} sm={5.5}>
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
                        history.push(
                          `/details/${data.id}/${data.category}${joinTitle}`
                        );
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
                        history.push(
                          `/details/${data.id}/${data.category}${joinTitle}`
                        );
                      }}
                    >
                      {data.title}
                    </Typography>
                    <Typography sx={{ fontSize: 13, fontWeight: 500, mt: 2 }}>
                      {truncateText(data.description, 350)}
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
                        history.push(
                          `/details/${data.id}/${data.category}${joinTitle}`
                        );
                      }}
                      sx={{
                        backgroundColor: "#bd047c", // Primary color
                        mt: 3,
                        color: "#ffffff",
                        padding: "10px 20px",
                        fontSize: "16px",
                        textTransform: "none",
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
                </Fragment>
              );
            })}
        </Grid>
      </Grid>
      <Grid sx={{ mt: 3 }} container>
        <Grid xs={1}></Grid>
        <Grid xs={10} sm={4}>
          {isHideLoadMore ? null : (
            <Button
              variant="outlined"
              sx={{
                borderColor: "#1976d2", // Border color
                color: "#1976d2", // Text color
                padding: "10px 20px",
                fontSize: "16px",
                width: "100%",
                textTransform: "none",
                transition:
                  "border-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out",
                "&:hover": {
                  borderColor: "#115293", // Darker shade for hover
                  color: "#115293",
                  transform: "scale(1.05)",
                },
                "&:active": {
                  borderColor: "#4791db", // Lighter shade for active
                  color: "#4791db",
                  transform: "scale(0.95)",
                },
              }}
              onClick={loadMoreArticles}
            >
              Load More
            </Button>
          )}
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
      {/* <Grid xs={12} md={0.6}></Grid>
      <Grid xs={12} md={3.7}>
        <Container sx={{ bgcolor: "#bd047c", p: 1 }}>
          <Typography sx={{ fontSize: 18, fontWeight: 600, color: "#f5f5f5" }}>
            Categories
          </Typography>
        </Container>
      </Grid> */}
    </Grid>
  );
}
