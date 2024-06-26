import CategoryPageComponent from "@/Component/Category/CategoryPageComponent";
import CategoryLoadingSkeleton from "@/Component/LoadingSkeleton/CategoryPageLoadingPage";
import DetailPageLoadingSkeleton from "@/Component/LoadingSkeleton/DetailsPageLoadingSkeleton";
import { fetchArticles, fetchCategories } from "@/services/articleServices";
import React, { Suspense } from "react";

interface CategoryPropsType {
    searchParams: {
      page: string;
      limit: string;
      category:string
    };
    params: {
      category: string;
    };
  }
export default async function CategoryPage({ searchParams,params }: CategoryPropsType) {
    const { page, limit } = searchParams;
    const articles = await fetchArticles({ page, limit,category:params?.category });
    const Category = await fetchCategories();
  
  return (
    <Suspense>
     <CategoryPageComponent category={Category.data} categoryWiseArticles={articles.data} total={articles.total} />
    </Suspense>
  );
}
