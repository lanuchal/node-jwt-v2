const Auth = require("../models/auth.model.js");
const {
  hash: hashPassword,
  compare: comparePassword,
} = require("../utils/password.js");

const {
  generate: generateToken,
  decode: verifyToken,
} = require("../utils/jwt.js");

// Create and Save a new Auth
exports.create = (req, res) => {
  //   Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Auth
  const auth = {
    name: req.body.name,
    email: req.body.email,
    pass: hashPassword(req.body.pass),
  };

  // Save Auth in the database
  Auth.create(auth, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error create user.",
      });
    // else res.send(data);
    else
      res.send({
        status: data.status,
        msg: data.mag,
        insertId: data.id,
        data:
          data.data != "no data"
            ? { name: data.data.name, email: data.data.email }
            : data.data,
      });
  });
};
