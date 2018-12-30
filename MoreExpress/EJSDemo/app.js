let express = require("express");
let app = express();
let port = 3000;

app.use(express.static("public"));

app.get('/', function(req, res) {
    res.render("home.ejs");
});

app.get('/posts', function(req, res) {
    let posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"},
    ]

    res.render("posts.ejs", {posts: posts});
});

app.listen(port, function() {
    console.log("The server is listening on port " + port +"!");
});