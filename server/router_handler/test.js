const db = require("../db/index");
// index页面
exports.test = (req, res) => {
  sql =
    "select t_time from users where user_id=?;SELECT unique_id FROM elevator RIGHT OUTER JOIN check_task ON unique_id=elevator.ele_id WHERE check_task.worker_id=?";
  db.query(sql, [req.user.user_id, req.user.user_id], (err, results) => {
    if (err) return res.cc(err);
    res.cc(results, 0);
  });
};
// 电梯信息(位置和型号)
exports.rirenwu_msg = (req, res) => {
  sql =
    "select t_time from users where user_id=?;SELECT unique_id,elevator.location,elevator.site,ele_type FROM elevator RIGHT OUTER JOIN check_task ON unique_id=elevator.ele_id WHERE check_task.worker_id=?";
  db.query(sql, [req.user.user_id, req.user.user_id], (err, results) => {
    if (err) return res.cc(err);
    res.cc(results, 0);
  });
};
// 检验次数
exports.count = (req, res) => {
  sql = "select * from check_record where unique_id=?";
  db.query(sql, req.body.unique_id, (err, results) => {
    if (err) return res.cc(err);
    res.cc(results, 0);
  });
};
