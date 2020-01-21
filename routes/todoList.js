var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getAll', (req, res) => {
  res.send('All TODO items are here!!');
})

module.exports = router;