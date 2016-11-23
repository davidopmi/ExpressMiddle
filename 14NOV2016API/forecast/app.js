var express = require("express") ; 
var path = require("path") ; 
var app = express(); 
var Forecast = require("forecastio") ; 
var zipdb = require("zippity-do-dah"); 

// var options = {
//   APIKey: "298eea9cb2169bb47ec06bf8c4189282"
// } ; 

var weather= new Forecast('298eea9cb2169bb47ec06bf8c4189282');


app.use(express.static(path.resolve(__dirname, "public"))) ; 
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs") ; 

//2: the routes 

//   /  $/
app.get('/', function(req,res){
    res.render("index.ejs") ; 
}) ; 

app.get("/temp/:zipcode", function(req,res,next){
    var zipcode = req.params.zipcode ; 
     console.log(zipcode) ;
    var location = zipdb.zipcode(zipcode) ; 
    if(!location || !location.zipcode){
        next(); 
        return; 
    }
    var latitude = location.latitude ; 
    var longitude = location.longitude ; 
    console.log(latitude + ", " + longitude) ;
    weather.forecast(latitude, longitude, function(err, data){
            if (err) {
                next();
                return ;
            }
            res.json({
                zipcode: zipcode,
                temperature: data.currently.temperature
            }); 
    })
    
})

//3 : set up the server 
app.listen(process.env.PORT, process.env.IP, function(req,res){
    console.log("my server is up!!!") ; 
}); 