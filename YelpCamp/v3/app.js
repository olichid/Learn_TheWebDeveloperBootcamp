let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let MongoClient = require('mongodb').MongoClient;
let mongoose = require("mongoose");
const port = 3000;

mongoose.connect("mongodb://localhost:27017/yelp_camp",{ useNewUrlParser: true }, function(err, db) {
    console.log("Connected correctly to server");
});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");



// Campground.create(
//     {
//         name: "Salmon Creek", 
//         image: "https://cdn.vox-cdn.com/thumbor/1j72cfH6ka3baNiIvbstiHQbnfo=/0x0:5225x3479/920x613/filters:focal(2195x1322:3031x2158):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg",
//         description: "This is a huge granite hill, no bathrooms, NO water"
//     }, function(err, campground) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND: ");
//             console.log(campground);
//         }
//     });

app.get("/", function(req, res) {
    res.render("landing");
});

// INDEX - Show all the campgrounds
app.get("/campgrounds", function(req, res) {
    // Get all the campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if (err){
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

// CREATE - Create a new camp to DB
app.post("/campgrounds", function(req, res) {
    // get new campground information from form
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            // redirect to the campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

//NEW - Show form to create new camp
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

//
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });


});
app.listen(port, function() {
    console.log("The YelpCamp Server Has Started!");
});
