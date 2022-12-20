const sql = require("./db.js");

const Auth = function (Auth) {
  //   console.log(Auth);
};

Auth.create = (data, result) => {
  sql.query(
    "SELECT * FROM `user` WHERE user_mail = ?",
    [data.email],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, {
          status: 0,
          id: "no id",
          mag: "Email already exists",
          data: "no data",
        });
      } else {
        sql.query(
          "INSERT INTO `user` (`user_mail`, `user_pass`, `user_name`) VALUES (?, ?, ?);",
          [data.email, data.pass, data.name],
          (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(err, null);
              return;
            }
            console.log("created Auth: ", { id: res.insertId, data });
            result(null, {
              status: 1,
              id: res.insertId,
              mag: "create new user success ",
              data: data,
            });
          }
        );
      }
    }
  );
};

module.exports = Auth;
