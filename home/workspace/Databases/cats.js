var mongoose = require("mongoose"); 
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true }); 

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String,
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB
// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy",
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("something went wrong");
//     } else {
//         console.log("we just saved a cat to the database");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

//retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no! Error!");
        console.log(err);
    } else {
        console.log("All the cats...");
        console.log(cats);
    }
})