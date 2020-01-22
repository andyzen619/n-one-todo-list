var express = require("express");
var router = express.Router();
var pool = require("../../../db/db");


/**
 * Get all tasks by category
 */
router.get("/getAll/byCategory/:category", (req, res) => {
  const category = req.params.category;

  console.log("Getting items by category:", category);

  pool.query(`select * from todolistitems where category = '${category}'`)
  .then(q_res => { 
    res.send(q_res.rows);
  })
  .catch(q_err => {
    console.log(q_err);
    res.send("There was an error proccessing this request, please try again.")
  })
})

module.exports = router;