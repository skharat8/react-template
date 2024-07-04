import axios from "axios";
import type { ResponseError } from "@/data/types";

const { VITE_SERVER_ENDPOINT: BASE_URL } = import.meta.env;

function createAxiosInstance() {
  const instance = axios.create({ baseURL: `${BASE_URL}` });
  instance.defaults.withCredentials = true;

  instance.interceptors.response.use(
    res => res,
    err => {
      if (axios.isAxiosError<ResponseError>(err)) {
        if (err.response?.status === 401) {
          // TODO: signOut();
        }

        return Promise.reject(
          new Error(err.response?.data.error ?? err.message)
        );
      }

      return Promise.reject(err);
    }
  );

  return instance;
}

export default createAxiosInstance;
