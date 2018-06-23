const configDB = require("../config/dbconfig");
const mongodb = require("mongodb");
const monk = require("monk");
const db = monk(configDB.url);
const auth = db.get("auth");

module.exports = function(app) {
  app.get("/auth", function(req, res) {
      console.log(req.params.username)
    auth.find().then(data => res.json(data));
  });
};