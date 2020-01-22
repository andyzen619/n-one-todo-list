var express = require("express");
var router = express.Router();
var pool = require("../../../db/db");

/**
 * Updates specified todo list item
 */
router.put("/update/:id", (req, res) => {
  const todoItemId = req.params.id;
  const todoItem = req.body;

  //keeps track of number of successfull queries to database;
  let success = 0;

  //Loops through body for fields to update
  //At each iteration, update the the specified column
  Object.keys(todoItem).forEach(key => {
    pool
      .query(
        `update todolistitems set ${key} = '${todoItem[key]}'
    where id = ${todoItemId}
    `
      )
      .then(q_res => {
        console.log(`Updated ${key} for todo item ${todoItemId}`);
        success += 1;

        //Send back success response if all upates were successfull
        if (success === Object.keys(todoItemId).length - 1) {
          console.log(
            "Number of successfull updates is equal to length of body"
          );
          res.send(`Update todo item ${todoItemId}`);
        }
      })
      .catch(q_err => {
        console.log(q_err);
        res.send("There was an error updating this item, please try again.");
      });
  });
});

module.exports = router;
