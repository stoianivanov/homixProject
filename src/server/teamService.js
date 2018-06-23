const configDB = require("../config/dbconfig");
const mongodb = require("mongodb");
const monk = require("monk");
const db = monk(configDB.url);
const teams = db.get("teams");

module.exports = function(app) {
  app.get("/teams/", function(req, res) {
    teams.find().then(data => res.json(data));
  });
};