var express = require('express');
var router = express.Router();

/* GET home page. 
   No Authorizatio needed
*/

router.get('/', function(req, res, next) {
  res.render('index', { title: 'RentHub' });
});


/*
/users  -> json 
*/

/*router.get('/:collection', function(req, res) {
  var params = req.params.collection;
  var db = req.db;
  var collection = db.get(params);
  collection.find({}, {}, function(e, results) {
    console.log(results);
    res.json(results);
  });
});*/

module.exports = router;