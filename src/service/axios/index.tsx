import axios from "axios";

const BASE_URL =
  "https://cors-anywhere.herokuapp.com/http://tgf.kahero.uz/admin-api";

export const myAxios = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? BASE_URL : "/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
  },
});
