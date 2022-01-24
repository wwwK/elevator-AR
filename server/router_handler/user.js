// 这是路由处理函数模块
const bcrypt = require("bcryptjs");
const db = require("../db/index");
const jwt = require("jsonwebtoken");

const config = require("../config.js");
// 注册界面
exports.register = (req, res) => {
  const regsql = "select * from users where username=?";
  db.query(regsql, req.body.username, (err, results) => {
    if (err) return res.cc(err);
    if (results.length > 0) {
      return res.cc("用户名已被注册，请更换后再试", 2);
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const sql = "insert into users set ?";
    db.query(
      sql,
      {
        username: req.body.username,
        password: req.body.password,
        xing: req.body.xing,
        ming: req.body.ming,
        IDcard: req.body.IDcard,
        place: req.body.place,
        // avatar: req.body.avatar,
      },
      (err, results) => {
        if (err) return res.cc(err);
        if (results.affectedRows != 1)
          return res.cc("注册用户失败，请稍后再试");
        res.cc("成功", 0);
      }
    );
  });
};
// 忘记密码界面
exports.forget = (req, res) => {
  const sql = "select * from users where username=?";
  db.query(sql, req.body.username, (err, results) => {
    if (err) return res.cc(err);
    if (results.length != 1) return res.cc("您还未注册！");
    const compareresult = bcrypt.compareSync(
      req.body.newPwd,
      results[0].password
    );
    req.body.newPwd = bcrypt.hashSync(req.body.newPwd, 10);
    if (compareresult) return res.cc("密码不能相同", 2);
    const sql = "update users set password=? where username=?";
    db.query(sql, [req.body.newPwd, req.body.username], (err, results) => {
      if (err) return res.cc(err);
      res.cc("成功", 0);
    });
  });
};
// 登录页面
exports.login = (req, res) => {
  const sql = "select * from users where username=?";
  db.query(sql, req.body.username, (err, results) => {
    if (err) return res.cc(err);
    if (results.length != 1) return res.cc("登陆失败，请稍后再试");
    const compareresult = bcrypt.compareSync(
      req.body.password,
      results[0].password
    );
    if (!compareresult) return res.cc("密码错误");
    const user = { ...results[0], password: "" };
    const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: "1h" });
    res.send({ status: 0, message: "登陆成功", token: "Bearer " + tokenStr });
  });
};
// 修改信息页面
exports.redirect = (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const sql = "update users set ? where user_id=?";
  db.query(
    sql,
    [
      {
        username: req.body.username,
        password: req.body.password,
        xing: req.body.xing,
        ming: req.body.ming,
        IDcard: req.body.IDcard,
        place: req.body.place,
      },
      req.body.user_id,
    ],
    (err, results) => {
      if (err) return res.cc(err);
      if (results.affectedRows !== 1) return res.cc("更新用户基本信息失败", 2);
      res.cc("用户信息已更新", 0);
    }
  );
};
