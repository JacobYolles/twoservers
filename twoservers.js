var http = require("http");

var goodPORT = 7000;
var badPORT = 7500;

function handleRequest(request, response) {

    // send this string to the client.
    response.end("You always look really pretty:" + request.url);
    
}

// gives the server functionality.
var server = http.createServer(handleRequest);

//start server so it begins to listen to client requests
server.listen(goodPORT, function() {
    console.log("Server listening on : http://localhost:" + goodPORT);
    
})


function handleRequestTwo(request, response) {

    // send this string to the client.
    response.end("You should shower more:" + request.url);
    
}

// gives the server functionality.
var server = http.createServer(handleRequestTwo);

//start server so it begins to listen to client requests
server.listen(badPORT, function() {
    console.log("Server listening on : http://localhost:" + badPORT);
    
})