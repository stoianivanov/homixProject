const configDB = require("../config/dbconfig");
const mongodb = require("mongodb");
const monk = require("monk");
const db = monk(configDB.url);
const users = db.get("users");

module.exports = function(app) {
  app.get("/user/:email", function(req, res) {
    users.find({ email: req.params.email }).then(data => res.json(data));
  });

  app.get("/auth/:email", function(req, res) {
    users.find({ email: req.params.email }).then(data => res.json(data));
  });
};
