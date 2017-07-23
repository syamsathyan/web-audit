/**
 * Created by sathyans on 7/20/17.
 */
var config = require('config');
var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = config.get('history.dbConfig.url');
console.log("Loaded DB Url from Config");
var _db;

module.exports = {

    connectToServer: function( callback ) {
        MongoClient.connect( url, function( err, db ) {
            _db = db;
            return callback( err );
        } );
    },

    getDb: function() {
        return _db;
    }
};



