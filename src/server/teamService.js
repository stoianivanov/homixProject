const configDB = require("../config/dbconfig");
const mongodb = require("mongodb");
const monk = require("monk");
const db = monk(configDB.url);
const teams = db.get("teams");
const users = db.get("users");

module.exports = function(app) {
  app.get("/teams", function(req, res) {
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

  app.get("/freelancers", function(req, res) {
    users.find({ free: "true" }).then(data => res.json(data));
  });

  app.get("/allDevs", function(req, res) {
    users.find({}).then(data => res.json(data));
  });

  app.post("/addNewMember", function(req, res) {
    teams
      .update(
        { _id: new mongodb.ObjectID(req.body.teamId) },
        {
          $push: { members: req.body.developerId }
        }
      )
      .then(() => {
        users
          .update(
            { _id: new mongodb.ObjectID(req.body.developerId) },
            {
              $set: {
                free: "false"
              }
            }
          )
          .then(() => res.end());
      });
  });
};
