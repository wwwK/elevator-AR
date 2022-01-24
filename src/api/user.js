// 用户相关请求模块
import request from "@/utils/request";
export const login = (data) => {
  return request({ method: "POST", url: "/api/login", data });
};
export const register = (data) => {
  return request({
    method: "POST",
    url: "/api/register",
    data,
  });
};
export const restart = (data) => {
  return request({ method: "POST", url: "/api/forget", data });
};
export const redirect = (data) => {
  return request({ method: "POST", url: "/api/redirect", data });
};
export const test = (data) => {
  return request({ method: "GET", url: "/do/test", data });
};
export const rirenwu_msg = (data) => {
  return request({ method: "GET", url: "/do/rirenwu_msg", data });
};
export const count = (data) => {
  return request({ method: "POST", url: "/do/count", data });
};
export const ave_time = (data) => {
  return request({ method: "get", url: "/work/ave_time", data });
};
export const low_qual = (data) => {
  return request({ method: "get", url: "/work/low_qual", data });
};
export const ele_type = (data) => {
  return request({ method: "get", url: "/work/ele_type", data });
};
