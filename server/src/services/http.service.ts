import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await axios.get(url, config);
  return response.data;
};
