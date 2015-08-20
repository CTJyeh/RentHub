var express = require('express');
var router = express.Router();

/* item home */ 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Items Endpoint' });
});

/* GET items listing. */


router.get('/itemlist', function(req, res) {
  var db = req.db; 
  //-> call the api route to retriveve. 
  var collection = db.get('itemcollection');
  collection.find({}, {}, function(e, docs) {
    res.render('itemlist', {
      "itemlist" : docs
    });
  });
});

/* Update item Listing */

router.put('/', function(req, res, next) {
  res.send('Successfully updated item' ) ;
});

router.delete('/', function(req, res, next) {
  res.send('Successfully deleted item' ) ;
});

module.exports = router;
