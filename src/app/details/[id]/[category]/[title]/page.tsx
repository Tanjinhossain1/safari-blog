import DetailsComponent from "@/Component/Details/Details";
import { fetchArticlesDetails, fetchCategories } from "@/services/articleServices";
import React from "react";

export default async function Details({ params }: { params: any }) {
  const data = await fetchArticlesDetails({ id: params?.id });
  const Category = await fetchCategories();

  return (
    <>
      <DetailsComponent category={Category.data} articleDetail={data?.data[0]} />
    </>
  );
}
