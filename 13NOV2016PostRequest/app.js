// step 1: create app 
var express = require("express") ; 
var bodyParser = require("body-parser") ;
var app = express() ; 
app.use(bodyParser.urlencoded({extended:true})) ;
// you tell app you want ejs module to render your view
var path = require("path") ; 

app.use(express.static(path.resolve(__dirname, "public"))) ; 
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs") ; 

// =====create some fake data ===
var friends = [
    {name: "david",
     sex: "male"
    } ,
    {
     name : "jack",
     sex: "female"
    }
    ] ; 


// step 2: set up route
// 1: root route
app.get('/', function(req,res){
    res.send('<h1>welcome to my page</h1>') ; 
})
// /friends : display all friends
app.get('/friends', function(req,res){
    res.render('friends.ejs', {
    friends: friends
})})

//create a post route
app.post('/addfriend', function(req,res){
    var fname  = req.body.name ;
    var sex = req.body.sex ; 
    var newFriend = {
        name: fname,
        sex : sex 
    }; 
    friends.push(newFriend); 
    res.redirect('/friends');
})

// step 3: set up server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("my server is up"); 
})