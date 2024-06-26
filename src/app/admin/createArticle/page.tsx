import { fetchBrands, fetchCategories } from "@/services/articleServices";
import { CategoryTypes } from "@/types/category";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
// import CreateArticleComponent from "@/Component/Admin/CreateArticleComponent";

const CreateArticleComponent = dynamic(
  () => import("@/Component/Admin/CreateArticleComponent"),
  { ssr: false }
);


export default async function CreateArticle() {
  const categories = await fetchCategories();
  const brands = await fetchBrands();
  console.log("categories   ", categories);
  return (
    <Suspense>
      <CreateArticleComponent brandsData={brands.data} categories={categories.data} />
    </Suspense>
  );
}
