var express = require("express");
var router = express.Router();
var pool = require("../../../db/db");

/**
 * Gets all completed tasks
 */
router.get("/completed", (req, res) => {
  pool.query(`select * from todolistitems where status = 'COMPLETED'`)
  .then(q_res=> {
    res.send(q_res.rows);
  })
  .catch(q_err=> {
    res.send("There was an error processing this request. Please try again.");
  });
});

module.exports = router;