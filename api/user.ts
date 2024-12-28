import type { AxiosResponse } from "axios";
import { axiosInstance } from "./index";
import { apiConfig } from "@/assets/config";

// ====================  用户考试列表  ====================
export const PostAskQuery = async (uuid: string, type: "cert" | "list") => {
  try {
    const response: AxiosResponse = await axiosInstance.post(
      apiConfig.askQuery,
      {
        uuid,
        type,
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("用户考试列表 获取失败");
  }
};

// ====================  申请证书  ====================
export const PostApply = async (uuid: string, id: number) => {
  try {
    const response: AxiosResponse = await axiosInstance.post(apiConfig.apply, {
      uuid,
      id,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("申请证书 失败");
  }
};

// ====================  会员更新  ====================
export const PostUpdateUser = async (userData: {
  uuid: string;
  username: string;
  card: string;
  avatar: string;
  sex: "0" | "1" | "2";
  email: string;
  address: string;
  unit: string;
}) => {
  try {
    const response: AxiosResponse = await axiosInstance.post(
      apiConfig.userUpdate,
      userData
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("申请证书 失败");
  }
};
