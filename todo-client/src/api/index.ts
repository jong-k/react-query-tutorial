import axios from "axios";
import { API_URL } from "../enums";

export const customAxios = axios.create({
  baseURL: API_URL,
  headers: {
    // "Content-Type": "application/json", // GET 요청에는 사용 불가
    Accept: "application/json",
  },
});
