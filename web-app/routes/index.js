var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function(e, docs) {
    res.render('userlist', {
      "userlist" : docs
    });
  });
});

router.get('/:collection', function(req, res) {
  var params = req.params.collection;
  var db = req.db;
  var collection = db.get(params);
  collection.find({}, {}, function(e, results) {
    console.log(results);
    res.json(results);
  });

});

module.exports = router;
