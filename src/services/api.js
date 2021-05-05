import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers,
});

export default api;
