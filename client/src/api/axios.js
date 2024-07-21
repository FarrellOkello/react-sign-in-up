import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "http://13.51.238.245"
    : "http://13.51.238.245:5000";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
