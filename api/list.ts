import type { AxiosResponse } from "axios";
import { axiosInstance } from "./index";
import { apiConfig } from "@/assets/config";

// ====================  分类文章列表  ====================
export const PostArticlesList = async (
  page: number,
  limit: number,
  cate_id: number[]
) => {
  try {
    const response: AxiosResponse = await axiosInstance.post(
      apiConfig.articlesList,
      {
        page,
        limit,
        cate_id,
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("文章列表请求失败");
  }
};

// ====================  文章详情  ====================
export const PostArticlesDetail = async (id: number) => {
  try {
    const response: AxiosResponse = await axiosInstance.post(
      apiConfig.articlesDetail,
      {
        id,
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("文章详情请求失败");
  }
};
