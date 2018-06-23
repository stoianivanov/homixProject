const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require('body-parser');

app.set("view engine", "html");
app.use(bodyParser.json());
app.use(express.static(__dirname + "./../../dist"));

require("./pastProjectsService")(app);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "./../../dist/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
