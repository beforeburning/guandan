import type { AxiosResponse } from "axios";
import { apiConfig } from "@/assets/config";
import { axiosInstance } from "./index";

// ====================  登录  ====================
export const PostSignin = async (card: string, password: string) => {
  try {
    const response: AxiosResponse = await axiosInstance.post(apiConfig.signin, {
      card,
      password,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("登录失败");
  }
};

// ====================  注册  ====================
export const PostSignup = async (
  username: string,
  card: string,
  password: string,
  sex: number,
  mobile: string,
  address: string,
  unit: string
) => {
  try {
    const response: AxiosResponse = await axiosInstance.post(apiConfig.signup, {
      username,
      card,
      password,
      sex,
      mobile,
      address,
      unit,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("注册失败");
  }
};

// ====================  交卷  ====================
export const PostScore = async (uuid: string, score: string) => {
  try {
    const response: AxiosResponse = await axiosInstance.post(apiConfig.score, {
      uuid,
      score,
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("注册失败");
  }
};
