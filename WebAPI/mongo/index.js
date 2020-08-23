const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL and  Database Name +++++++++++
const url = 'mongodb://localhost:27017';
const dbName = 'XRiego';
// +++++++++++++++++++++++++++++++++++++++++++++

var db = null;
var Wrapper = function(){
    this.db = null;
    this.init();
};

Wrapper.prototype.init = function(){
    var wrapper = this;
    // Use connect method to connect to the server
    MongoClient.connect(url,{useUnifiedTopology: true}, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server"); 
        wrapper.db = client.db(dbName);         
    });
}

module.exports = new Wrapper();