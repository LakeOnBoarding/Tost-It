import axios from "axios";
import BASE_URL from "../utils/baseUrl";

export const customAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const customAuthAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

//customAuthAxios.interceptors.request.use(
//    function (config) {
//        const loginInfo = JSON.parse(localStorage.getItem("loginStorage"));
//        const accessToken = loginInfo.token;
//        //const refreshToken = loginInfo.refreshToken;
//        if (accessToken) {
//            config.headers["Authorization"] = `Bearer ${accessToken}`;
//            //config.headers.common["Refresh-Token"] = `Bearer ${refreshToken}`;
//        }
//        return config;
//    },
//    function (error) {
//        return Promise.reject(error);
//    }
//)
