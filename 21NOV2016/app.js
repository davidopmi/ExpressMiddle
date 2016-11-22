//1: 
//step1:
var express = require("express"); 
var path = require("path") ;
var app = express() ; 

//======some settings ====
app.use(express.static(path.resolve(__dirname, "public"))) ; 
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs") ; 

//======make some fake data: pretend those are from database===
var friends = [{
    name: "david",
    sex: "male"
},{
    name:"jackie",
    sex:"female"
},{
    name:"tom",
    sex: "male" 
},{
    name: "lisa",
    sex:"female"
}] ; 
//2: routes
app.get('/', function(req, res){
    res.render('index.ejs') ; 
})
app.get('/getData', function(req,res){
    console.log("i am in getData");
    //what client sends to you is in the req.query
    var sexVal = req.query.sex ;   
    // the logic part 
    var result = [] ; 
    friends.forEach(function(f){
        if (f.sex == sexVal) {
            result.push(f) ; 
        }
    })
    //you decide what to send back to client....
    var final= JSON.stringify(result) ; 
    res.status(200).send(final) ; 
}); 

//3:
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is up!") ;
})