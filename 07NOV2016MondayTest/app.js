// step 1
var express = require("express");
var path = require('path');
var ejs = require("ejs");
var app = express();
var animals = {
    dog: {
        sound: "wong",
        msg: "i am dog"
    },
    cat: {
        sound: "mew",
        msg: "i am a cat"
    },
    pig: {
        sound: "eat",
        msg: "i am pig"
    }
};
// middleware
app.use(express.static(path.resolve(__dirname, "public")));
app.set("views", path.resolve(__dirname, "views")) ;
app.set("view engine","ejs") ;

// this is to render html by using EJS template
app.engine('html', ejs.renderFile) ;

// step 2: set up route
// root route: home page!!!
app.get("/", function(req, res) {
    res.render("home");
});

// dog, cat, pig: /dog  /cat /pig
app.get("/animal/:animal", function(req, res) {
    var paramValue = req.params.animal;
    res.render("animal", {
        paramVariable: paramValue,
        animals: animals
    });
})
// res.send: could only show text. or html tag
// app.get("/html", function(req, res) {
//      res.sendFile(path.join(__dirname + '/views/testhtml.html'));
// })

app.get("/html", function(req, res) {
    res.render('testhtml.html');
})

app.get("*", function(req, res) {
    res.send("page under construction!!");
})

// step 3: set up server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("my server is up!");
})
