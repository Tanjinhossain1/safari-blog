 
import React, { useEffect, useState } from "react"; 
import { RecentArticleDataType } from "@/types/RecentArticle";
import axios from "axios"; 
import RecentArticleComponent from "./RecentArticleComponent";
 

export const getServerSideProps = async () => {
  try {
    console.log("getServerSideProps"); // Check if this log appears in the server logs
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/api/v1/article/all?page=1&limit=1`
    );

    return {
      props: {
        articles: result.data.data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        articles: [],
      },
    };
  }
};
export default function RecentArticle({articles,page,limit}:{articles:RecentArticleDataType[],page:number,limit: number}) {
   

  return (
   <RecentArticleComponent articles={articles} pages={page} limit={limit} />
  );
}