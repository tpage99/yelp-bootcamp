var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

//Post - title and content
//after embedding into userSchema, had to move before userSchema so it was defined first
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema); 

//User - Email and name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "Hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });

// newUser.posts.push({
//     title: "How to brew potion",
//     content: "Just kidding. Go to class to learn it!"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// });

User.findOne({name: "Hermione Granger"}, function(err, user){
    if(err){
       // console.log(err);
    } else {
        user.posts.push({
            title: "Three Things I Really Hate",
            content: "Voldemort. Voldemort. Voldemort."
        });
        user.save(function(err, user){
            if(err){
                console.log(user);
            } else {
                console.log(user);
            }
        });
    }
});