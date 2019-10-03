var express = require("express");
var app = express(); 

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "oink",
        cow: "moo",
        dog: "woof, woof",
        cat: "I hate you human",
        goldfish: "..."
    }
    var animal = req.params.animal; 
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound); 
});

app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    
    for(var i = 0; i < times; i++){
        result += message + " ";
    }
    res.send(result);
});

app.get("*", function(req, res){
    console.log("Someone requested a page that doesn't exist");
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("Server has started");
}); 