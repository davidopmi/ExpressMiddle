//1: 
var express = require("express");
var app = express() ; 
var request = require("request"); 
app.set("view engine", "ejs")

//2: root route
app.get('/', function(req,res){
    res.render('index.ejs') ; 
} );
// when form submit, will go to here!
app.get('/search', function(req,res){
    var param = req.query.mname ; 
    var path = "http://www.omdbapi.com/?" +"s="+"param"  ; 
    request(path, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body)["Search"] ; 
            res.render('result.ejs', {
                result: result
            })
        }
    })
}); 


//3: set up server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is up!!!"); })