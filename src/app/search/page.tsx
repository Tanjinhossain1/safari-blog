import CategoryPageComponent from "@/Component/Category/CategoryPageComponent";
import { fetchArticles, fetchCategories } from "@/services/articleServices";
import React, { Suspense } from "react";

interface CategoryPropsType {
    searchParams: {
      page: string;
      limit: string;
      search:string
    };
    params: {
      search: string;
    };
  }
export default async function SearchFieldSearchPage({ searchParams,params }: CategoryPropsType) {
    const { page, limit,search } = searchParams;
    console.log('search', params,search)
    const articles = await fetchArticles({ page, limit,search });
    const Category = await fetchCategories();
  
  return (
    <Suspense>
     <CategoryPageComponent isSearch category={Category.data} categoryWiseArticles={articles.data} total={articles.total} />
    </Suspense>
  );
}
