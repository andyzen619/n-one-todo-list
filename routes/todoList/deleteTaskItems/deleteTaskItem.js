var express = require("express");
var router = express.Router();
var pool = require("../../../db/db");

/**
 * Removed specified todo list item
 */
router.delete("/remove/:id", (req, res) => {
  const todoItemId = req.params.id;

  pool.query(`delete from todolistitems where id = '${todoItemId}'`)
  .then(q_res => {
    res.send("Item has been successfully removed");
  })
  .catch(q_err => {
    res.send("There was an error removing this item, please try again.");
  })
});

module.exports = router;