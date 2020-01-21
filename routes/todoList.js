var express = require("express");
var router = express.Router();
var pool = require("../db/db");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

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

/**
 * Add todo item to database
 */
router.post("/add", (req, res) => {
  const todoItem = req.body;

  console.log(todoItem.due_date);

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

router.put("/update/:id", (req, res) => {
  const todoItemId = req.params.id;
  res.send(`Update todo item ${todoItemId}`);
});

router.delete("/remove/:id", (req, res) => {
  const todoItemId = req.params.id;
  res.send(`Remove item ${todoItemId}`);
});

module.exports = router;
