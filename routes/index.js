var express = require('express');
var router = express.Router();
var pesan = require('../controllers/pesan')
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/pesan',pesan.send)

module.exports = router;
