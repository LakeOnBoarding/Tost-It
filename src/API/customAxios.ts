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

// interface localStorage {
//   access_token: string
// }

customAuthAxios.interceptors.request.use(
  function (config) {
    console.log(localStorage.getItem("access_token"));
    //const loginInfo = JSON.parse(localStorage.access_token);
    //const accessToken = loginInfo.token;
    ////const refreshToken = loginInfo.refreshToken;
    //if (accessToken) {
    //  config.headers["Authorization"] = `Bearer ${accessToken}`;
    //  //config.headers.common["Refresh-Token"] = `Bearer ${refreshToken}`;
    //}
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
