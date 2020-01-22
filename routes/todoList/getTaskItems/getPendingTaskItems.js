var express = require("express");
var router = express.Router();
var pool = require("../../../db/db");

/**
 * Gets all tasks that are pending
 */
router.get("/pending", (req, res) => {
  pool.query(`select * from todolistitems where status = 'PENDING'`)
  .then(q_res=> {
    res.send(q_res.rows);
  })
  .catch(q_err=> {
    res.send("There was an error processing this request. Please try again.");
  });
});

module.exports = router;