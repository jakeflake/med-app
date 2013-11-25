// Setup modules and plugins
var express = require('express'),
    path = require('path'),
    http = require('http'),
    db = require("./db.js");

// Setup new express application
var app = express();

// Application Configuration
app.configure(function () {
    app.set('port', process.env.PORT);
    app.use(express.logger('dev'));
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

// Routes
app.get("/", function (request, response) {
    response.send(200, "Hello World!");
});

app.get('/db', db.findAll);

// Server Listening
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
