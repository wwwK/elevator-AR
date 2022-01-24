const express = require("express");
const app = express();
const joi = require("joi");

// 配置跨域中间件
const cors = require("cors");
app.use(cors());
// 配置解析表单数据中间件
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// 封装res.cc函数
app.use((req, res, next) => {
  res.cc = function (err, status = 1) {
    res.send({ status, message: err instanceof Error ? err.message : err });
  };
  next();
});
// 一定要在路由之前配置解析token的中间件
const expressJWT = require("express-jwt");
const config = require("./config.js");
app.use(
  expressJWT({ secret: config.jwtSecretKey, algorithms: ["HS256"] }).unless({
    path: [/^\/api/],
  })
);
// 导入用户模块
const userRouter = require("./router/user");
app.use("/api", userRouter);
// 导入任务模块
const testRouter = require("./router/test");
app.use("/do", testRouter);
// 导入工作记录模块
const work_recordRouer = require("./router/work_record.js");
app.use("/work", work_recordRouer);

// 定义错误级别的中间件
app.use(function (err, req, res, next) {
  // 验证失败导致的错误
  if (err instanceof joi.ValidationError) res.cc(err);
  if (err.name === "UnauthorizedError") return res.cc("身份认证失败");
  res.cc(err);
});
// 启动服务器
app.listen(5000, () => {
  console.log("api server running at http://127.0.0.1:5000");
});
