import Footer from "@/Component/HomePage/Footer";
import NewsPageComponent from "@/Component/News/NewsComponent";
import Navbar from "@/Component/Shared/Navbar";
import NavbarLoadingSkeleton from "@/Component/Shared/NavbarLoadingSkeleton";
import { fetchArticles } from "@/services/articleServices";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
// import Loading from "./loading";

interface NewsPagePropsType {
  searchParams: {
    page: string;
    limit: string;
  };
}

const Loading = dynamic(
  () => import("./loading"),
  { ssr: false }
);

export default async function NewsPage({ searchParams }: NewsPagePropsType) {
  const { page, limit } = searchParams;
  const articles = await fetchArticles({ page, limit });

  return (
    <>
    {/* <Loading /> */}
      <Suspense fallback={<NavbarLoadingSkeleton />}>
        {" "}
        <Navbar />
      </Suspense>
      <NewsPageComponent articles={articles.data} total={articles.total} />
      <Suspense>
        {" "}
        <Footer />
      </Suspense>
    </>
  );
}
