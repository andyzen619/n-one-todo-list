var express = require("express");
var router = express.Router();
var pool = require("../../../db/db");

/**
 * Get all todo list items
 */
router.get("/getAll", (req, res) => {
  pool
    .query("select * from todolistitems")
    .then(q_res => {
      res.send(q_res.rows);
    })
    .catch(q_err => {
      console.log(q_err);
      res.send("There was an error with this request");
    });
});

module.exports = router;