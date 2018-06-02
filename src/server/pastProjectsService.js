module.exports = function(app){
    // app.get('/', function(req, res){
    //     res.end("hi");
    // });

    app.get("/getPastProjects", function(req, res) {
        res.send(pastProjects.find());
    });
};