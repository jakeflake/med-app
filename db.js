// Setup modules
var mongo = require('mongodb');

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

// Function to show all entries of database
exports.findAll = function(req, res) {
    db.collection('medData', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};