import Axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { url } from "@/utils";

export const coingecko = Axios.create({
  baseURL: url.COIN_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

function requestHandler(config: InternalAxiosRequestConfig) {
  config.headers.Accept = "application/json";
  config.headers["Content-Type"] = "application/json";
  config.headers["x-cg-demo-api-key"] = "CG-RLmDBhAyU7dZwbCM6tNZbjFG";

  return config;
}

function errorHandler(error: AxiosError) {
  return Promise.reject(error);
}

coingecko.interceptors.request.use(requestHandler, errorHandler);
