const db = require("../db/index");
exports.ave_time = (req, res) => {
  sql = "select t_today,t_week,t_month from users where user_id=?";
  db.query(sql, req.user.user_id, (err, results) => {
    if (err) return res.cc(err);
    res.cc(results[0], 0);
  });
};
exports.low_qual = (req, res) => {
  sql =
    "select *  from check_record where check_date=NOW() and state='不合格'  and check_record.`checker` LIKE ? ";
  db.query(sql, req.user.ming, (err, results) => {
    if (err) return res.cc(err);
    res.cc(results[0], 0);
  });
};
