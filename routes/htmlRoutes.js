var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    if (req.isAuthenticated()) {
      var user = {
        id: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render("home", user);
    } else {
      res.render("home");
    }
  });

  app.get("/signup", function(req, res) {
    if (req.isAuthenticated()) {
      res.redirect("/landing");
    } else {
      res.render("accounts");
    }
  });

  app.get("/landing", function(req, res) {
    if (req.isAuthenticated()) {
      res.render("landing");
    } else {
      res.render("landing");
    }
  });

  app.get("/scorecard", function(req, res) {
    res.render("scorecard");
  });

  app.get("/theview", function(req, res) {
    if (req.isAuthenticated()) {
      res.redirect("/signup");
    } else {
      res.render("theview");
    }
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
