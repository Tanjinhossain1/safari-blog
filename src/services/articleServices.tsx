"use server";
// services/articleService.ts
import { RecentArticleDataType } from "@/types/RecentArticle";
import { CategoryTypes } from "@/types/category";
import { revalidatePath } from "next/cache";

export async function fetchArticles({
  page = "1",
  limit = "3",
  category,
}: {
  page: string;
  limit: string;
  category?: string;
}): Promise<{
  data: RecentArticleDataType[];
  page: number;
  limit: number;
  total: number;
}> {
  let url = `${process.env.NEXT_APP_URL}/api/v1/article/all?page=${page}&limit=${limit}`;
  if (category) {
    url = `${process.env.NEXT_APP_URL}/api/v1/article/all?page=${page}&limit=${limit}&category=${category}`;
  }
  console.log("test 1 ", url,category);
  
  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    console.error(
      `Failed to fetch articles: ${response.status} ${response.statusText}`
    );
    throw new Error("Failed to fetch articles");
  }

  const data = await response.json();
  revalidatePath("/");
  return {
    data: data.data,
    page: data.meta.page,
    limit: data.meta.limit,
    total: data.meta.total,
  };
}

export async function fetchArticlesDetails({ id }: { id: string }): Promise<{
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
    data: data?.data,
  };
}

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
