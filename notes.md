# 07NOV2016 


# 13NOV2016 Sunday Post Requests!!!!
- Note: get request can be visited in the url, while POST request can only be visited through form or postman
* Write post routes, and test them with Postman
- app.post('/url', function(req, res){var somevar = req.body.name}): its only triggered by POST request
- remember you only use post route once you want to send something to database 
test: use the postman to test your route: make sure you change the action to be post 
app.post("/posttest", function(req,res){
    res.send("you send a post request")
})

* Use a form to send a post request
- <input name="varname"> : here the varname along with its value will be put in the POST request body
key value pair (very useful for server end to get it out)

* Use body parser to get form data from the request body.
- req.body is an object that contains ALL the data comes from the request.
- when you use a form to post a request, ALL the form's data comes inside the request's body
- BUT EXPRESS by default does not create req.body for us!!! you need to install the body-parser package
- so  that it could take the body part from request and create the req.body as javascript object for us!!!
- res.redirect('url')
- 


# 13NOV2016 API: add new friend
1) learn what is an API and how to use postman to send a request 
2) learn how to use request package to send a request to yahoo sunset api 
3) notice that the request('url', function(error, response, body)) --- the body will contains the data but its a string. so in order to use it 
you have to parse it using JSON.parse(string) to convert it to a js object 

# 13NOV2016 API: form post reqeust add new friend: param is stored at req.body !!! 
<form action="/addfriend" method="POST">
    name: <br/>
    <input type="text" name="name"  placeholder="provide name"></input>
    <br/>
    sex: <br/>
    <input type="text" name="sex" placeholder="provide sex"></input>
    <br/>
    <button>add new friend</button>
</form>
app.post('/addfriend', function(req,res){
    var fname  = req.body.name ;
    var sex = req.body.sex ; 

#14NOV2016 movie: form send GET request: param is stored at req.query !
<form action="/results" method = "GET">
    <input type="text" name="info" placeholder = "plz type in something"></input>
    <button>submit</button>
</form>
app.get('/results', function(req,res){
    var param = req.query.info ; 
    var urlStr = "http://www.omdbapi.com/?s=" + param ; 
    request(urlStr, function(error, response, body){}

# 14NOV2016 weather forecast 
1) learn how to use zippity-do-dah and forecastio package 


my key for forecastio: 298eea9cb2169bb47ec06bf8c4189282
