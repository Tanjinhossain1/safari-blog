import Footer from "@/Component/HomePage/Footer";
import NewsPageComponent from "@/Component/News/NewsComponent";
import Navbar from "@/Component/Shared/Navbar";
import { fetchArticles } from "@/services/articleServices";
import React, { Suspense } from "react";

interface NewsPagePropsType {
  searchParams: {
    page: string;
    limit: string;
  };
}

export default async function NewsPage({ searchParams }: NewsPagePropsType) {
  const { page, limit } = searchParams;
  const articles = await fetchArticles({ page, limit, showInNews: "show" });

  return (
    <>
      <Suspense>
        {" "}
        <Navbar />
      </Suspense>
      <NewsPageComponent articles={articles?.data} total={articles?.total} />
      <Suspense>
        {" "}
        <Footer />
      </Suspense>
    </>
  );
}
