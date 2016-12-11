//1: 
var mongoose = require("mongoose");

//2: connect to database: dogDB=== please make sure you started mongod 
mongoose.connect('mongodb://localhost/dogDB');

//3: define a schema 
var dogSchema = new mongoose.Schema({
    name: String, 
    sex: String, 
    age : Number 
});

//4: create a model(mapper): dogs
var Dog = mongoose.model('Dog', dogSchema) ; 
//C: create 
// Dog.create({
//     name:"d3",
//     sex:"male",
//     age:7
// }, function(err, dog){
//     if(err){
//         console.log("something BAD happend!") ; 
//     } else{
//         console.log(dog) ; 
//     }
// })

//U: upate: findById: single quotation!!!! 
// Dog.findById('58460251ef792a153d014536', function(err, dog){
//     dog.age = 8 ; 
//     dog.save(function(err, dog){
//         if (err) {
//             console.log("save failed!") ; 
//         } else{
//             console.log("save success!") ; 
//         }
//     })
// } )

//Delete: findByIdAndRemove
Dog.findByIdAndRemove('58460251ef792a153d014536', function(err){
    if (err) {
        console.log("delete failed!"); 
    }else{
        console.log("remove success");
    }
})

//R: read
Dog.find({},function(err,dogs ){
    if (err) {
       console.log("something BAD happend!") ;  
    } else{
        console.log("everything is cool!!!") ;  
        console.log(dogs) ; 
    }
})

// var dog2 = new Dog({
//   name :"d2",
//   sex:"female",
//   age :6 
// });
// dog2.save() ; 
// var dog1 = new Dog({
//     name:"d1",
//     sex:"male",
//     age :5 
// }) ; 
// dog1.save() ;


/** As of "mongoose": ">=2.7.1" you can remove the document directly with the .remove() method 
 * rather than finding the document and then removing it which seems to me more efficient and easy to maintain.
 Model.remove({ _id: req.body.id }, function(err) {
    if (!err) {
            message.type = 'notification!';
    }
    else {
            message.type = 'error';
    }
});
 *
 */ 




