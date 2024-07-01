import axios from "axios";
import { baseConfig } from "@/assets/config";
import type { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseConfig.axiosBaseUrl as string,
  headers: {},
});
