import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Component/Shared/Navbar";
import Banner from "@/Component/HomePage/Banner";
import Footer from "@/Component/HomePage/Footer";
import { fetchArticles, fetchCategories } from "@/services/articleServices";
import { Suspense } from "react";

interface HomePropsType {
  searchParams: {
    page: string;
    limit: string;
  };
}
async function Home({ searchParams }: HomePropsType) {
  const { page, limit } = searchParams;
  const articles = await fetchArticles({ page, limit });
  const Category = await fetchCategories();
  return (
    <>
      <Suspense>
        <Navbar />
      </Suspense>
      {articles ? (
        <Suspense>
          <Banner category={Category.data} articles={articles.data} total={articles.total} />
        </Suspense>
      ) : null}
      <Footer />
    </>
  );
}
export default Home;
