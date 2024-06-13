"use server"
// services/articleService.ts
import { RecentArticleDataType } from "@/types/RecentArticle";

export async function fetchArticles({
  page,
  limit,
}: {
  page: string;
  limit: string;
}): Promise<{
  data: RecentArticleDataType[];
  page: number;
  limit: number;
  total: number;
}> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/api/v1/article/all?page=${page}&limit=${limit}`,
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
  return {
    data: data.data,
    page: data.meta.page,
    limit: data.meta.limit,
    total: data.meta.total,
  };
}

// import { RecentArticleDataType } from "@/types/RecentArticle";

// export async function fetchArticles({
//   page,
//   limit,
// }: {
//   page: number;
//   limit: number;
// }): Promise<{
//   data: RecentArticleDataType[];
//   page: number;
//   limit: number;
//   total: number;
// }> {

//     const response = await fetch(
//       `http://localhost:3002/api/v1/article/all?page=${page}&limit=${limit}`
//       ,
//       {
//         cache: "no-store", // To ensure the data is fetched on every request
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch articles");
//     }

//     const data = await response.json();
//     return {
//       data: data.data,
//       page: data.meta.page,
//       limit: data.meta.limit,
//       total: data.meta.total,
//     };
// }
