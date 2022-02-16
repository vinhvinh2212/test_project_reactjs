import axios from "axios";

const instance = axios.create({
  // .. where we make our configurations
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: { Accept: "application/json", "content-type": "application/json" }
});

export default instance;
