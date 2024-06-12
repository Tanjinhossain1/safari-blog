import React from "react";
import Banner from "./Banner";
import axios from "axios";
import { RecentArticleDataType } from "@/types/RecentArticle";


interface Props {
    articles: RecentArticleDataType[];
  }
  
  const TopParentForHome: React.FC<Props> = ({ articles }) => {
    console.log('articles ', articles); // Log the articles prop received by the component
    return (
      <Banner articles={articles} />
    );
  };
  
  export default TopParentForHome;