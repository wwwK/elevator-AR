// 导入定义验证规则的包
const joi = require("joi");
// 定义用户名和密码的验证规则
const username = joi.string().alphanum().length(11).required();
const password = joi
  .string()
  .pattern(/^[\S]{6,18}$/)
  .required();
// 定义注册表单的验证规则
const xing = joi.string().required();
const ming = joi.string().required();
const IDcard = joi.string().required().length(18);
const avatar = joi.string();
const place = joi.string().required();
const user_id = joi.number().required();
exports.user_login_schema = {
  body: {
    username,
    password,
  },
};
exports.user_register_schema = {
  body: {
    username,
    password,
    xing,
    ming,
    IDcard,
    // avatar,
    place,
  },
};
exports.user_forget_schema = {
  body: {
    username,
    newPwd: joi.not(joi.ref("oldPwd")).concat(password),
  },
};
exports.user_redirect_schema = {
  body: {
    username,
    password,
    place,
    IDcard,
    ming,
    xing,
    user_id,
  },
};
