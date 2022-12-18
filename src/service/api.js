import axios from "axios";

const api = axios.create({
  baseURL: "https://random-data-api.com/",
});

export default api;