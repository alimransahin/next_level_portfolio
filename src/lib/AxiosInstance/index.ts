import envConfig from "@/src/config";
import axios from "axios";
// console.log("envConfig.baseApi:", envConfig.baseApi);
const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

export default axiosInstance;
