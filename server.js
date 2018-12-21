var express = require('express'); //import
var app = express();
var path = require('path');


// viewed at http://localhost:8080

app.get('/(*)?' , function(req, res) {
    console.log("req.params", req.params)
    console.log("req.path", req.path)
    var p = req.params['0'];
    if (!p) {
        p = '/index.html'
    } else {
        p = '/' + p
    }
    res.sendFile(path.join(__dirname + p));
    
}); //route

app.listen(8080);