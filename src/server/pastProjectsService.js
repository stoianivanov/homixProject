const configDB = require("../config/dbconfig");
const mongodb = require("mongodb");
const monk = require("monk");
const db = monk(configDB.url);
const pastProjects = db.get("pastProjects");

module.exports = function(app) {
  app.get("/allPastProjects", function(req, res) {
    pastProjects.find().then(data => res.json(data));
  });
};
