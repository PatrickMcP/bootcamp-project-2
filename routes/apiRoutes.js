var db = require("../models");

// Course Routes..
module.exports = function(app) {
  // Get all examples
  app.get("/api/courses", function(req, res) {
    db.Course.findAll({}).then(function(dbCourse) {
      res.json(dbCourse);
    });
  });

  app.get("/api/courses/:id", function(req, res) {
    db.Course.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCourse) {
      res.json(dbCourse);
    });
  });

  app.post("/api/courses", function(req, res) {
    db.Course.create(req.body).then(function(dbCourse) {
      res.json(dbCourse);
    });
  });

  // Accounts routes...
  app.post("/api/accounts/", function(req, res) {
    db.Accounts.create(req.body).then(function (dbAccount) {
      res.json(dbAccount);
    });
  });

  app.get("/api/accounts/", function(req, res) {
    db.Accounts.findAll({}).then(function(dbAccount) {
      res.json(dbAccount);
    });
  });

  app.get("/api/accounts/:uuid", function(req, res) {
    console.log(req.params);
    db.Accounts.findOne({
      where: {
        uuid: req.params.uuid
      }
    }).then(function(dbAccount) {
      res.json(dbAccount);
    });
  });
};
