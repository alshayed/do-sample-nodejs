const mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.connect('mongodb://localhost:27017/test');

  const Cat = mongoose.model('Cat', { name: String });

  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));

  res.send('respond with a resource');
});

module.exports = router;
