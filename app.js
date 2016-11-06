var express = require("express"); 
var app = express() ; 

// set up route
app.get('/', function(req,res){
    res.send("home page") ; 
})

// comment/
app.get('/comments', function(req, res) {
    var comments = [{
        author: 'david',
        content : 'I like your site'
    }, {
        author : 'jack', 
        content: 'need more css work'
    }]  ; 
    res.render('comments.ejs', {
        comments: comments
    })
})

// comments/2
app.get('/comments/:id', function(req, res){
    var comments = [{
        author: 'david',
        content : 'I like your site'
    }, {
        author : 'jack', 
        content: 'need more css work'
    }]  ; 
    var id = Number(req.params.id) -1; 
    var comment = comments[id] ; 
    
    res.render('comment.ejs', {
        author: comment.author , 
        content: comment.content 
    })
    
}) ;



// app.get('/:animal', function(req,res){
//     var animals = {
//         dog: 'woof',
//         cat: 'mew'
//     } ; 
//     var animal = req.params.animal ; 
//     var sound = animals[animal] ; 
//     res.render("dog.ejs" , {
//          animal : animal,
//          sound : sound 
//     }) ; 
// })

//set up server 

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is up") ;
})


