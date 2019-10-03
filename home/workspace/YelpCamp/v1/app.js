var express = require("express");
var app = express();
var bodyParser = require("body-parser");
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

app.use(bodyParser.urlencoded({extended: true}));
app.set ("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
     // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image; 
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
   // redirect back to campgrounds page
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");
});