var express = require("express");
var router = express.Router();
var pool = require("../../../db/db");

/**
 * Gets all tasks sorted by due date descending
 */
router.get('/getAll/sortByDueDate', (req, res) => {
  pool.query(`select * from todolistitems order by due_date ASC`)
  .then(q_res => {

    res.send(q_res.rows);
  })
  .catch(q_err => {
    res.send("There was an error processing this request. Please try again.");
  })
});

module.exports = router;