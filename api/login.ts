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
export const PostScore = async (
  uuid: string,
  cate_id: 1 | 2,
  score: string
) => {
  try {
    const response: AxiosResponse = await axiosInstance.post(apiConfig.score, {
      uuid,
      cate_id,
      score,
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("注册失败");
  }
};

// ====================  发送验证码  ====================
export const PostSendCode = async (mobile: string) => {
  try {
    const response: AxiosResponse = await axiosInstance.post(
      apiConfig.sendCode,
      {
        mobile,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("发送验证码失败");
  }
};

// ====================  登录/注册  ====================
export const PostLogin = async (mobile: string, code: string) => {
  try {
    const response: AxiosResponse = await axiosInstance.post(apiConfig.login, {
      mobile,
      code,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("登录/注册");
  }
};
