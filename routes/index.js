var express = require('express');
var router = express.Router();
const mongoUtil = require('../db/mongoUtil');

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('GET Pagination Limit:', req.query.limit);
    // Find some documents
    var db = mongoUtil.getDb();
    var collection = db.collection('web_history');
    collection.find({}, {"sort": ['date', 'asc']}).toArray(function (err, docs) {
        res.send(docs);
    });
});

/* POST home page. */
router.post('/', function (req, res, next) {
    //console.log(req.body);
    const user = req.body.user;
    const asset = req.body.asset;
    if (!user) {
        res.send("No user in Data, user is needed", 400);
    }
    else if(!asset)
    {
        res.send("No asset in Data, asset is needed", 400);
    }
    else {
        var db = mongoUtil.getDb();
        var collection = db.collection('web_history');
        collection.insertOne(
            {user: user, date: new Date(), tags: ["tada"], status: "created"}
        );
        res.sendStatus(201);
    }
});

module.exports = router;
