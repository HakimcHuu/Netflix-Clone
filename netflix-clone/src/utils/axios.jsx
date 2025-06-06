import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 10000,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios - API request failed:", error.message);
    return Promise.reject(error);
  }
);

export default instance;


