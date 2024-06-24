import { CategoryTypes } from "@/types/category";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
// import CreateArticleComponent from "@/Component/Admin/CreateArticleComponent";

const CreateArticleComponent = dynamic(
  () => import("@/Component/Admin/CreateArticleComponent"),
  { ssr: false }
);

export async function fetchCategories(): Promise<{
  data: CategoryTypes[];
}> {
  const response = await fetch(`${process.env.NEXT_APP_URL}/api/category/all`, {
    cache: "no-store",
  });

  if (!response.ok) {
    console.error(
      `Failed to fetch Category: ${response.status} ${response.statusText}`
    );
    throw new Error("Failed to fetch Category");
  }

  const data = await response.json();
  // revalidatePath('/')
  return {
    data: data?.data,
  };
}

export default async function CreateArticle() {
  const categories = await fetchCategories();
  console.log("categories   ", categories);
  return (
    <Suspense>
      <CreateArticleComponent categories={categories.data} />
    </Suspense>
  );
}
