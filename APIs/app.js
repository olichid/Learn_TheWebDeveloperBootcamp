let express = require("express");
let app = express();
let request = require("request");
const port = 3000;

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function(req, res) {
    var query = req.query.search;
    console.log(query);
    var queryurl = "https://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    console.log(queryurl);
    request(queryurl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.listen(port, function() {
    console.log("Movie App has started!");
});