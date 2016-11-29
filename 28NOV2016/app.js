//1
var express = require("express") ; 
var app = express() ; 
var path = require("path") ; 
var bodyParser = require("body-parser"); 

//======some settings ====
app.use(express.static(path.resolve(__dirname, "public"))) ; 
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs") ; 
app.use(bodyParser.urlencoded({ extended: true }))

var friends= [{
    name: "david" , 
    sex : "male"
}, {
    name: "lisa",
    sex : "female"
}, {
    name: "jack",
    sex: "female"
}]

//2: setup routes
app.get('/', function(req,res){
    res.render('index.ejs') ; 
}); 

app.get('/getFriend', function(req,res){
    //either male or female
    var param = req.query.sexVal ; 
    var result = []  ; 
    friends.forEach(function(f){
        if (f.sex == param) {
            result.push(f) ; 
        }
    })
    if (result.length>0) {
        res.status(200).setHeader('content-type','text/plain');
    } else{
        res.status(500) ; 
    }
    var finalResult = JSON.stringify(result) ; 
    res.send(finalResult) ; 
}) ; 


app.post('/addFriend',function(req,res){
    var nameVal= req.body.name ; 
    var sexVal = req.body.sex ; 
    var newFriend = {
       name : nameVal,
       sex: sexVal
    }; 
    friends.push(newFriend) ; 
    res.status(200).setHeader('content-type','text/plain');
    var result = JSON.stringify(friends) ; 
    res.send(result) ;
}); 



//3 bring up server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is up!!!") ; 
})