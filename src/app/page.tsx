import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Component/Shared/Navbar";
import Banner from "@/Component/HomePage/Banner";
import Footer from "@/Component/HomePage/Footer";
import { GetServerSideProps } from "next";
import { RecentArticleDataType } from "@/types/RecentArticle";

export async function fetchArticles({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<{
  data: RecentArticleDataType[]
  page: number;
  limit: number;
  total: number;
}> {
  // const [page,setPage] = useState<number>(0)
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/api/v1/article/all?page=${page}&limit=${limit}`,
    {
      cache: "no-store", // To ensure the data is fetched on every request
    }
  );
  
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
    }
    
    const data = await response.json();
    console.log("this is props ", data);
  return {
    data: data.data,
    page: data.meta.page,
    limit: data.meta.limit,
    total: data.meta.total,
  }
}

async function Home() {
  let page = 1;
  let limit = 3;
  const articles = await fetchArticles({ page, limit });
  console.log("articles 3434", articles);
  return (
    <>
      <Navbar />
      {articles ? (
        <Banner articles={articles.data} page={page} limit={limit}  />
      ) : null}
      <Footer />
    </>
  );
}
export default Home;
