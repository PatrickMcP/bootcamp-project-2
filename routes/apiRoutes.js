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
    db.Accounts.create(req.body).then(function(dbAccount) {
      res.json(dbAccount);
    });
  });

  app.get("/api/accounts/", function(req, res) {
    db.Accounts.findAll({}).then(function(dbAccount) {
      res.json(dbAccount);
    });
  });

  app.get("/api/accounts/:uuid", function(req, res) {
    db.Accounts.findOne({
      where: {
        uuid: req.params.uuid
      }
    }).then(function(dbAccount) {
      res.json(dbAccount);
    });
  });

  // Rounds routes....
  // Get all rounds associated with a single account
  app.get("/api/rounds/:uuid", function(req, res) {
    db.Round.findAll({
      where: {
        AccountUuid: req.params.uuid
      }
    }).then(function(dbRounds) {
      res.json(dbRounds);
    });
  });

  // Get all rounds associated with a single acoount at a single course.
  app.get("/api/rounds/:uuid/:course", function(req, res) {
    db.Round.findAll({
      where: {
        AccountUuid: req.params.uuid,
        CourseId: req.params.course
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/rounds/", function(req, res) {
    db.Round.create(req.body).then(function(result) {
      res.json(result);
    });
  });
};
