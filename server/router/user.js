const express = require("express");
const router = express.Router();
const user_handler = require("../router_handler/user.js");
const expressJoi = require("@escook/express-joi");
// 导入需要的验证规则对象
const {
  user_login_schema,
  user_register_schema,
  user_forget_schema,
  user_redirect_schema,
} = require("../schema/user");
// 登录界面
router.post("/login", expressJoi(user_login_schema), user_handler.login);
// 注册界面
router.post(
  "/register",
  expressJoi(user_register_schema),
  user_handler.register
);
// 忘记密码界面
router.post("/forget", expressJoi(user_forget_schema), user_handler.forget);
// 修改用户信息界面
router.post(
  "/redirect",
  expressJoi(user_redirect_schema),
  user_handler.redirect
);
module.exports = router;
