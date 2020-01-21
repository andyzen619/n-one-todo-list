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

/**
 * Updates specified todo list item
 */
router.put("/update/:id", (req, res) => {
  const todoItemId = req.params.id;
  const todoItem = req.body;

  let success = 0;

  Object.keys(todoItem).forEach(key => {
    pool.query(`update todolistitems set ${key} = '${todoItem[key]}'
    where id = ${todoItemId}
    `)
    .then(q_res => {
      console.log(`Updated ${key} for todo item ${todoItemId}`);
      success += 1;
    })
    .catch(q_err => {
      console.log(q_err);
      res.send("There was an error updating this item, please try again.")
    });    
  })

  if(success === Object.keys(todoItemId).length - 1){
    res.send(`Update todo item ${todoItemId}`);
  }
});

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
