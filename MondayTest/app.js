// step 1
var express = require("express");
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
app.use(express.static("public")); 
app.set("view engine","ejs") ;

// step 2: set up route
// root route: home page!!!
app.get("/", function(req, res) {
    res.render("home");
});

// dog, cat, pig: /dog  /cat /pig
app.get("/:animal", function(req, res) {
    var paramValue = req.params.animal;
    res.render("animal", {
        paramVariable: paramValue,
        animals: animals
    });
})

app.get("*", function(req, res) {
    res.send("page under construction!!");
})

// step 3: set up server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("my server is up!");
})
