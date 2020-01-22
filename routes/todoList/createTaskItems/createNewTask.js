var express = require("express");
var router = express.Router();
var pool = require("../../../db/db");

/**
 * Add todo item to database
 */
router.post("/add", (req, res) => {
  const todoItem = req.body;
  console.log(todoItem);

  pool
    .query(
      `insert into todolistitems 
    (title, description, due_date, status) 
    values (
      '${todoItem.title}', 
      '${todoItem.description}', 
      TO_DATE('${todoItem.due_date}', 'DD/MM/YYYY'), 
      '${todoItem.status}')`
    )
    .then(q_res => {
      res.send("Item has been added");
    })
    .catch(q_err => {
      console.log(q_err);
      res.send("There was an error adding this item please try again.");
    });
});

module.exports = router;