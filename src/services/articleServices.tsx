"use server"
// services/articleService.ts
import { RecentArticleDataType } from "@/types/RecentArticle";
import { revalidatePath } from "next/cache";

export async function fetchArticles({
  page = "1",
  limit = "3",
}: {
  page: string;
  limit: string;
}): Promise<{
  data: RecentArticleDataType[];
  page: number;
  limit: number;
  total: number;
}> {
    console.log('test 1 ',page)
     
  const response = await fetch(
    `http://localhost:3000/api/v1/article/all?page=${page}&limit=${limit}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    console.error(
      `Failed to fetch articles: ${response.status} ${response.statusText}`
    );
    throw new Error("Failed to fetch articles");
  }

  const data = await response.json();
  revalidatePath('/')
  return {
    data: data.data,
    page: data.meta.page,
    limit: data.meta.limit,
    total: data.meta.total,
  };
}

export async function fetchArticlesDetails({
  id
}: {
  id:number
}): Promise<{
  data: RecentArticleDataType[];
  page: number;
  limit: number;
  total: number;
}> {
     
     
  const response = await fetch(
    `http://localhost:3000/api/article/detail/${id}/details`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    console.error(
      `Failed to fetch articles: ${response.status} ${response.statusText}`
    );
    throw new Error("Failed to fetch articles");
  }

  const data = await response.json();
  revalidatePath('/')
  return {
    data: data.data,
    page: data.meta.page,
    limit: data.meta.limit,
    total: data.meta.total,
  };
}