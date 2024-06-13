import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Component/Shared/Navbar";
import Banner from "@/Component/HomePage/Banner";
import Footer from "@/Component/HomePage/Footer";
import { fetchArticles } from "@/services/articleServices";
import { SAMPLE_DATA } from "@/Component/HomePage/RecentArticleDataType";
import { details } from "./details/[id]/[category]/[title]/SAMPLE_DATA";

interface HomePropsType {
  params: {
    page: string;
    limit: string;
  };
}
async function Home({ params }: HomePropsType) {
  const { page, limit } = params;
  const articles = await fetchArticles({ page, limit });

  return (
    <>
      <Navbar />
      {articles ? (
        <Banner articles={articles.data} page={page} limit={limit} />
      ) : null}
      <Footer />
    </>
  );
}
export default Home;
