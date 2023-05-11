import axios, { AxiosRequestConfig } from "axios";
import { addQueryParams } from "./queryParams";

export function makeRequest(url: string, options: AxiosRequestConfig = {}) {
  const headers = {
    Authorization: `Bearer ${process.env.API_KEY}`,
    ...options.headers,
  };

  const updatedUrl = addQueryParams(url, options.params);

  return axios({
    url: `${process.env.API_BASE_URL}${updatedUrl}`,
    headers,
  });
}
