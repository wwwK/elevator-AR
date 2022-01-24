// 请求模块
import axios from "axios";
const request = axios.create({
  // headers: { "Content-Type": "multipart/form-data" },
  baseURL: "http://127.0.0.1:5000/",
});
// 请求拦截
request.interceptors.request.use(
  (config) => {
    if (localStorage.Authorization) {
      config.headers.Authorization = localStorage.Authorization;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截  401 token过期处理
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { status } = error.response;
    if (status == 401) {
      // 清除token
      localStorage.removeItem("Authorization");
      // 页面跳转
      router.push("/login");
    }
    return Promise.reject(error);
  }
);
export default request;
