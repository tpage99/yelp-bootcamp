var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://source.unsplash.com/y8Ngwq34_Ak",
        description: "sweet campground"
    },
        {
        name: "Desert Mesa",
        image: "https://source.unsplash.com/EnCaUE4QNOw",
        description: "even sweeter campground"
    },
        {
        name: "Canyon Floor",
        image: "https://source.unsplash.com/qelGaL2OLyE",
        description: "the sweetest of campgrounds"
    }
]

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err)
        } else {
        console.log("Removed campgrounds");
        data.forEach(function(seed){
           Campground.create(seed, function(err, campground){
               if(err){
                   console.log(err);
               } else {
                   console.log("added a campground!");
                   //create comment
                   Comment.create(
                       {
                           text:"This place is great, but I wish there was internet",
                           author: "Homer"
                       }, function(err, comment){
                           if(err){
                               console.log(err);
                           } else {
                           campground.comments.push(comment);
                           campground.save();
                           console.log("Created new comment");
                           }
                       });
               }
           });
        });
        }
    });
    //add a few campgrounds

    //add a few comments
}


module.exports = seedDB;