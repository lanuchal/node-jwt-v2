module.exports = (app) => {
  const auth = require("../controllers/auth.controller.js");

  var router = require("express").Router();

  router.post("/signup", auth.create);

  app.use("/api", router);
};
