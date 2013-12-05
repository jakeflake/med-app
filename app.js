// Setup modules and plugins
var express = require('express'),
    path = require('path'),
    http = require('http'),
    mongo = require('mongodb');

// Setup new express application
var app = express();

// Application Configuration
app.configure(function () {
    app.set('port', process.env.PORT);
    app.use(express.logger('dev'));
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

// Setup database server
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

// Setup connection to database 
var server = new Server(process.env.IP, 27017, {auto_reconnect: true});
var db = new Db('data', server);

// Open connection to database
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'data' database");
        db.collection('medData', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'medData' collection doesn't exist.");
            }
        });
    }
});

// Routes
app.get('/test', function(req, res) {
    res.json({ message: 'its actually working, wow!' });
});

app.get('/goals', function(req, res) {
    db.collection('medData', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
});

// Server Listening
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});