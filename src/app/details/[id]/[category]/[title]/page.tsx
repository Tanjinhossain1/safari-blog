import DetailsComponent from "@/Component/Details/Details";
import { fetchArticlesDetails } from "@/services/articleServices";
import React from "react";

export default async function Details({ params }: { params: any }) {
  const data = await fetchArticlesDetails({ id: params?.id });

  return (
    <>
      <DetailsComponent articleDetail={data?.data[0]} />
    </>
  );
}
