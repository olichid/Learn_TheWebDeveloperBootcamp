let express = require("express");
let app = express();
let port = 3000;

app.get('/', function(req, res) {
    res.render("home.ejs");
});

app.listen(port, function() {
    console.log("The server is listening on port " + port +"!");
});