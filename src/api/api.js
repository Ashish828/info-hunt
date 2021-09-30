import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://api.mediastack.com/v1",
});
