let express = require("express");
let app = express();
let bodyParser = require("body-parser");
const port = 3000;

let friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("home");
});

app.post("/addfriend", function(req, res) { 
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

app.listen(port, function() {
    console.log("The server is listening on port " + port + "!");
});