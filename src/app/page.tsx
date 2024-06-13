import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Component/Shared/Navbar";
import Banner from "@/Component/HomePage/Banner";
import Footer from "@/Component/HomePage/Footer"; 
import { fetchArticles } from "@/services/articleServices";
 
async function Home() {
  let page = 1;
  let limit = 3;
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
