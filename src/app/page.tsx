import Navbar from "@/Component/Shared/Navbar";
import Banner from "@/Component/HomePage/Banner";
import Footer from "@/Component/HomePage/Footer";
import { fetchArticles, fetchBrands, fetchCategories } from "@/services/articleServices";
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
  const LatestArticles = await fetchArticles({ page, limit,latestDevice:"latest" });
  const Category = await fetchCategories();
  const brands = await fetchBrands();
  return (
    <>
       <Suspense>
        <Navbar /> 
      </Suspense>  
      {articles ? (
        <Suspense>
          <Banner brands={brands.data} latestArticles={LatestArticles.data} category={Category.data} articles={articles.data} total={articles.total} />
        </Suspense>
      ) : null}  
      <Suspense>
      <Footer />
      </Suspense>
        
    </>
  );
}
export default Home;
