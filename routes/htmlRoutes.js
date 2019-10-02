// var db = require("../models");

module.exports = (app) => {
  // Load index page

  app.get("/chatroom", (req, res) => {
    res.render("chatroom", {});
  });

  // Load example page and pass in an example by id
  app.get("/", (req, res) => {
    res.render("signup", {});
  });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};
