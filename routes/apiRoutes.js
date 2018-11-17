var db = require("../models");

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
};
