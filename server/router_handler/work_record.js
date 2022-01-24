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
    "SELECT * from myelevator.check_record where to_days(now())-to_days(check_date)<1  and state='不合格' and checker=?;select * from myelevator.check_record where check_date between current_date()-7 and sysdate() and state='不合格' and checker=?;SELECT * FROM myelevator.check_record where DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= date(check_date) and state='不合格' and checker=?";
  db.query(
    sql,
    [req.user.ming, req.user.ming, req.user.ming],
    (err, results) => {
      if (err) return res.cc(err);
      res.cc(results, 0);
    }
  );
};
