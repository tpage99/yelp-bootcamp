var mongoose = require("mongoose");

//Post - title and content
//after embedding into userSchema, had to move before userSchema so it was defined first
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});


module.exports = mongoose.model("Post", postSchema); 