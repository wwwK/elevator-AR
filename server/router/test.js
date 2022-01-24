const express = require("express");
const router = express.Router();
const user_handler = require("../router_handler/test.js");

// 今日工作
router.get("/test", user_handler.test);
// 日检验数据
router.get("/rirenwu_msg", user_handler.rirenwu_msg);
//电梯检验次数
router.post("/count", user_handler.count);
module.exports = router;
