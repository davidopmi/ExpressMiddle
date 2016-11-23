// 1:
var express = require("express");
var request = require("request") ; 
var app = express() ; 

var path = require("path") ; 

app.use(express.static(path.resolve(__dirname, "public"))) ; 
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs") ; 
// 2:
app.get("/", function(req, res){
    request("https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
    ,function(error, response, body){
        // check if there is an error!!!
        if(error){
            console.log("errors!!!!" + error) ; 
        } else{
            if (response.statusCode == 200) {
                console.log(body) ;
                console.log(typeof body) ;
                
                var result = JSON.parse(body) ; 
                var sunset1 = result.query.results.channel.astronomy.sunset ; 
                var sunset2 = result["query"]["results"]["channel"]["astronomy"]["sunset"]; 
                res.send(sunset2) ;
            }
        }
    })
}); 

//3:
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is up!"); 
})