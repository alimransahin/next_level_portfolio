import axios from "axios";

import envConfig from "@/src/config";
// console.log("envConfig.baseApi:", envConfig.baseApi);
const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

export default axiosInstance;
