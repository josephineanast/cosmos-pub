import Axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { url } from "@/utils";

export const axios = Axios.create({
  baseURL: url.BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

function requestHandler(config: InternalAxiosRequestConfig) {
  config.headers.Accept = "application/json";
  config.headers["Content-Type"] = "application/json";
  config.headers["x-allthatnode-api-key"] = "8U3JLUhzIDg3GShvy9hkCCSYkLGc11kj";

  return config;
}

function errorHandler(error: AxiosError) {
  return Promise.reject(error);
}

axios.interceptors.request.use(requestHandler, errorHandler);
