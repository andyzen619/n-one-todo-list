var express = require('express');
var router = express.Router();
var pool = require('../db/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getAll', (req, res) => {
  pool.query("select * from todolistitems")
  .then(q_res => {
    res.send(q_res.rows);
  })
  .catch(q_err=> {
    console.log(q_err);
    res.send("There was an error with this request");
  });
})

router.post('/add', (req, res) => {
  res.send('Add todo item!');
});

router.put('/update/:id', (req, res) => {
  const todoItemId = req.params.id;
  res.send(`Update todo item ${todoItemId}`);
});

router.delete('/remove/:id', (req, res) =>{
  const todoItemId = req.params.id;
  res.send(`Remove item ${todoItemId}`);
});

module.exports = router;