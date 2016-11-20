//step1:
var express = require("express"); 
var path = require("path") ;
var fs = require("fs");
var app = express() ; 

//======some settings ====
app.use(express.static(path.resolve(__dirname, "public"))) ; 
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs") ; 

//step2:
app.get('/',function(req,res){
    res.render('index.ejs');
})
app.get('/xmlData', function(req,res){
    console.log("in /xmlData") ;
    //build the file path
    var path = __dirname + "/public/states.xml" ; 
    if (fs.existsSync(path)) {
        fs.readFile(path, function(error, data){
            if (error) {
                res.status(500); 
                res.send("reading file error");
            } else{
                res.status(200); 
                res.setHeader('content-type','text/xml') ;
                res.send(data);
            }
        })
    } else{
        // if the file does not exist, you need to tell client with status code
        res.status(404);
        res.end() ; 
    }
}) ; 

//step3: 
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("my server is up!!!") ;
})