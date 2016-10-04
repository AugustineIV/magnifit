var dispatcher = require('httpdispatcher');
//Lets require/import the HTTP module
var http = require('http');
var raccoon = require('raccoon');

//Lets define a port we want to listen to
const PORT=6379; 

//Lets use our dispatcher
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

raccoon.connect(PORT, '127.0.0.1');

raccoon.liked('garyId', 'movieId');
raccoon.liked('garyId', 'movie2Id');
raccoon.liked('chrisId', 'movieId');

raccoon.recommendFor('chrisId', 10, function(results){
  // results will be an array of x ranked recommendations for chris 
  // in this case it would contain movie2 
});

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

