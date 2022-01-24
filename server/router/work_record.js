const express = require("express");
const router = express.Router();
const user_handler = require("../router_handler/work_record.js");
//获得检验时间
router.get("/ave_time", user_handler.ave_time);
// 获得不合格数量
router.get("/low_qual", user_handler.low_qual);
module.exports = router;
