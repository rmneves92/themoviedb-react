import axios from "axios";

const apiKey = "b4bf9244e61c43cbd2bcbbcb2f7acafd";

const headers = {
  "Content-Type": "application/json",
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers,
  params: {
    api_key: apiKey,
  },
});

export default api;
