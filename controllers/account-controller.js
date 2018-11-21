/* eslint-disable no-unused-vars */
var db = require("../models");

var passport = require("passport");

module.exports = function(app) {
  app.get("/signup", function(_req, res) {
    res.render("accounts");
  });

  app.get("/logout", function(req, res) {
    req.session.destroy(function(_err) {
      req.logout();
      res.clearCookie("user_sid");
      res.clearCookie("first_name");
      res.clearCookie("user_id");
      res.redirect("/");
    });
  });
  app.post("/signup", function(req, res, next) {
    passport.authenticate("local-signup", function(err, user, info) {
      console.log("info", info);
      if (err) {
        console.log("passport err", err);
        return next(err); // will generate a 500 error
      }
      if (!user) {
        console.log("user error", user);
        return res.send({ success: false, message: "authentication failed" });
      }
      req.login(user, loginErr => {
        if (loginErr) {
          console.log("loginerr", loginerr);
          return next(loginErr);
        }
        console.log("redirecting....");
        res.cookie("first_name", user.first_name);
        res.cookie("user_id", user.uuid);
        return res.redirect("/landing");
      });
    })(req, res, next);
  });

  app.post("/login", function(req, res, next) {
    passport.authenticate("local-login", function(err, user, _info) {
      console.log("\n\n\n########userrrr", user);
      if (err) {
        console.log("passport err", err);
        return next(err); // will generate a 500 error
      }
      if (!user) {
        return res.send({ success: false, message: "authentication failed" });
      }
      req.login(user, loginErr => {
        if (loginErr) {
          console.log("loginerr", loginErr);
          return next(loginErr);
        }

        console.log("redirecting....");
        res.cookie("first_name", user.first_name);
        res.cookie("user_id", user.uuid);

        return res.json(true);
      });
    })(req, res, next);
  });
};
