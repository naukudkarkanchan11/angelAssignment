const MongoClient = require('mongodb').MongoClient;
var connections = {};
 
// Connection URL
const url = 'mongodb://localhost:27017';

// Use connect method to connect to the MOngoDB server
let connectMongo = () => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        console.log("Connected successfully to mongodb server");
        connections.mongo = client; 
    });
};

// Use to select DB connection
let getConnection = (connection) => {
    return connections[connection];
};

connectMongo();

module.exports = {
     getConnection : getConnection
}



