var express = require("express");
var app = express(); 

// "/" ==> "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});
// "/bye" ==> "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye");
});
// "/dog" ==> "MEOW"
app.get("/dog", function(req, res){
    console.log("Someone has requested /dog. Bring the puppies!")
    res.send("MEOW");
});

//this needs to come last! otherwise, it will supercede
//order of routes matters
app.get("*", function(req, res){
    console.log("Someone requested a page that doesn't exist")
    res.send("404 Error: Sorry, what you're asking for doesn't exist");
});

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("Server has started");
}); 