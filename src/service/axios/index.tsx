import axios from "axios";

const BASE_URL =
  "https://cors-anywhere.herokuapp.com/http://tgf.kahero.uz/admin-api";

export const myAxios = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? BASE_URL : "/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
  },
});

myAxios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("TOKEN");
    if (token) {
      config = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: token,
        },
      };
    }

    return config;
  },
  (err) => Promise.reject(err)
);
