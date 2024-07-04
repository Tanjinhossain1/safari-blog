import DetailsComponent from "@/Component/Details/Details";
import Navbar from "@/Component/Shared/Navbar";
import { fetchArticlesDetails, fetchCategories } from "@/services/articleServices";
import React from "react";

export default async function Details({ params }: { params: any }) {
  const data = await fetchArticlesDetails({ id: params?.id });
  const Category = await fetchCategories();

  return (
    <>
    
    <Navbar />
    {
      data?.data ? 
      <DetailsComponent category={Category.data} articleDetail={data?.data[0]} />
    : null}
    </>
  );
}
