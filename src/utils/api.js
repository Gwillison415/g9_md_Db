import axios from "axios";
const baseURL = "https://api.themoviedb.org/3";
export const axiosInstance = axios.create({
  baseURL,
  timeout: 1000,
  headers: {},
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY_V3,
    include_adult: false,
    language: "en-US",
  },
});
