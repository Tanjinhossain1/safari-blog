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
    `${process.env.NEXT_APP_URL}/api/v1/article/all?page=${page}&limit=${limit}`,
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
  id:string
}): Promise<{
  data: RecentArticleDataType[];
}> { 
  const response = await fetch(
    `${process.env.NEXT_APP_URL}/api/article/detail/${id}`,
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
  // revalidatePath('/')
  return {
     data:data?.data, 
  };
}