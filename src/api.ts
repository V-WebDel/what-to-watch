import axios, {AxiosInstance, AxiosRequestConfig, AxiosError} from 'axios';
import { getToken } from './token';

const BACKEND_URL = 'https://10.react.htmlacademy.pro/wtw';
const REQUEST_TIMEOUT = 5000;
interface Headers {
  [key: string]: string;
}

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        if (!config.headers) {
          config.headers = {};
        }
        (config.headers as Headers)['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};
