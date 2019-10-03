var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true }); 
app.use(bodyParser.urlencoded({extended: true}));
app.set ("view engine", "ejs");

// schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Salmon Creek", 
//     image: "https://source.unsplash.com/y8Ngwq34_Ak",
//     description: "This is a campground with a creek that runs right down the middle that is filled with salmon."
// }, function(err, campground){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Newly created campground: ");
//         console.log(campground);
//     };
// });

var campgrounds = [
    {name: "Salmon Creek", image: "https://source.unsplash.com/y8Ngwq34_Ak"}, 
    {name: "Granite Hill", image: "https://source.unsplash.com/qelGaL2OLyE"},
    {name: "Mountain Goat's Rest", image: "https://source.unsplash.com/EnCaUE4QNOw"},
    {name: "Salmon Creek", image: "https://source.unsplash.com/y8Ngwq34_Ak"}, 
    {name: "Granite Hill", image: "https://source.unsplash.com/qelGaL2OLyE"},
    {name: "Mountain Goat's Rest", image: "https://source.unsplash.com/EnCaUE4QNOw"},
    {name: "Salmon Creek", image: "https://source.unsplash.com/y8Ngwq34_Ak"}, 
    {name: "Granite Hill", image: "https://source.unsplash.com/qelGaL2OLyE"},
    {name: "Mountain Goat's Rest", image: "https://source.unsplash.com/EnCaUE4QNOw"},
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    // get all campgrounds from db
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds:allCampgrounds})
        }
    });
});

app.post("/campgrounds", function(req, res){
     // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image; 
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    // create a new campground and save to db
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
            console.log(newlyCreated);
        }
    });
});

app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs"); 
});

app.get("/campgrounds/:id", function(req, res){
    // find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else{
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");
});