const configDB = require("../config/dbconfig");
const mongodb = require("mongodb");
const monk = require("monk");
const db = monk(configDB.url);
const pastProjects = db.get("pastProjects");

module.exports = function(app) {
  app.get("/allPastProjects", function(req, res) {
    pastProjects.find().then(data => res.json(data));
  });

  app.post("/pastProject", function(req, res) {
    pastProjects.insert({ ...req.body });
  });

  app.delete("/pastProject/:id", function(req, res) {
    pastProjects.findOneAndDelete({ _id: new mongodb.ObjectID(req.params.id) });
  });
};
