//1: 
var express = require("express") ; 
var app = express() ; 
var request = require("request") ; 
var path = require("path") ; 

app.use(express.static(path.resolve(__dirname, "public"))) ; 
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs") ; 

//2: route
app.get('/', function(req,res){
    res.render("search.ejs") ; 
})

app.get('/results', function(req,res){
    var param = req.query.info ; 
    var urlStr = "http://www.omdbapi.com/?s=" + param ; 
    request(urlStr, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body)["Search"] ; 
            res.render("results.ejs", {
                param: param , 
                result : result 
            })
        } else{
            res.send("error happend!!!") ; 
        }
    })
})

//3: set up server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is up!") ; 
})
