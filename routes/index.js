var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'To Do Lists' });
  var db = req.db;
  var collection = db.get('list');
  collection.find({},{},function(e,docs){
    res.render( 'index', {
    "list": docs
    });
  });
});

module.exports = router;
