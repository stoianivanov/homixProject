const configDB = require("../config/dbconfig");
const mongodb = require("mongodb");
const monk = require("monk");
const db = monk(configDB.url);
const teams = db.get("teams");
const users = db.get("users");

module.exports = function(app) {
  app.get("/teams/", function(req, res) {
    teams
      .aggregate([
        {
          $unwind: "$members"
        },
        {
          $lookup: {
            from: "users",
            localField: "members",
            foreignField: "id",
            as: "member"
          }
        },
        {
          $group: {
            _id: "$_id",
            name: { $first: "$name" },
            members: {
              $push: "$member"
            }
          }
        }
      ])
      .then(data => {
        res.json(data);
      });
  });
};
