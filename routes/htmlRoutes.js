var db = require("../models");

module.exports = function(app) {
  // Load index page
  // app.get("/index", function(req, res) {
  //   db.Message.findAll({}).then(function(dbMessage) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       messages: dbMessage
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/", function(req, res) {
    res.render("signup", {});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
