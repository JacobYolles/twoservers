var http = require("http");

var goodPORT = 7000;
var badPORT = 7500;

function handleRequest(request, response) {
    var phrases = ["You always look really pretty", "You have a great smile", "You make people happy"];
    var phraseChosen = phrases[Math.floor(Math.random() * phrases.length)];
    // send this string to the client.
    response.end(phraseChosen + request.url);
    
}

// gives the server functionality.
var serverOne = http.createServer(handleRequest);

//start server so it begins to listen to client requests
serverOne.listen(goodPORT, function() {
    console.log("Server listening on : http://localhost:" + goodPORT);
    
})


function handleRequestTwo(request, response) {
    var phrases = ["People generally hate you", "You seem to make poor choices", "People don't like thinking about you"];
    var phraseChosen = phrases[Math.floor(Math.random() * phrases.length)];
    // send this string to the client.
    response.end(phraseChosen + request.url);
    
}

// gives the server functionality.
var serverTwo = http.createServer(handleRequestTwo);

//start server so it begins to listen to client requests
serverTwo.listen(badPORT, function() {
    console.log("Server listening on : http://localhost:" + badPORT);
    
})