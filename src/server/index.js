const configDB = require('../config/dbconfig.js');
const mongodb = require('mongodb');
const monk = require('monk');
const db = monk(configDB.url);
const pastProjects = db.get('users');

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set('view engine', 'html');
app.use(express.static(__dirname + "./../../dist"));


app.get("/test", function(req, res) {
    res.send({
        "_id": {
            "$oid": "5b1289eefb6fc07c033da2b1"
        },
        "name": "project 1",
        "duration": "17 May - 01 August 2017",
        "projectRoles": "Front-end Developer",
        "customer": "Some Customer name",
        "projectDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus varius lorem sed laoreet. Aenean elementum ultrices nibh, tincidunt varius risus posuere vel. Integer nisl risus, fermentum sed dapibus et, gravida vel lacus. Aenean sodales efficitur leo eget rutrum. Fusce ut euismod turpis, a blandit neque. Praesent id lacus ornare felis feugiat cursus id vitae tortor. Curabitur sit amet tristique ligula.Vestibulum molestie vel magna at viverra. Nulla sed erat dui. Donec et tempus lorem. Maecenas cursus finibus mollis. Phasellus blandit quam in nisi tristique, in cursus diam aliquam",
        "participation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus varius lorem sed laoreet. Aenean elementum ultrices nibh, tincidunt varius risus posuere vel. Integer nisl risus, fermentum sed dapibus et, gravida vel lacus. Aenean sodales efficitur leo eget rutrum. Fusce ut euismod turpis, a blandit neque.",
        "team": "2 backend developers 2 frontend developers 1 manual QA",
        "toolsAndTechnologies": "React React Native ES6 WebpackGoogle maps API Redux Jest Enzyme"
    });
});

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname + "./../../dist/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));