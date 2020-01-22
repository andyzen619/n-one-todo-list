var express = require("express");
var router = express.Router();
var pool = require("../../../db/db");

/**
 * Adds sub task to parent task
 */
router.post("/add/subTask/:parentTaskId",(req, res) => {
  const parentTaskId = req.params.parentTaskId;
  const subTaskItem = req.body;

  console.log("Adding subtask to task id: ", parentTaskId);

  pool.query(`insert into todolistitems 
  (title, description, due_date, status, parent_task_id) 
  values (
    '${subTaskItem.title}', 
    '${subTaskItem.description}', 
    TO_DATE('${subTaskItem.due_date}', 'DD/MM/YYYY'), 
    '${subTaskItem.status}',
    ${Number(parentTaskId)}
    )`)
  .then(q_res => {
    res.send(`Sub task has been added to ${parentTaskId}`);
  })
  .catch(q_err => {
    console.log(q_err);
    res.send("There was an error adding this item please try again.");
  })
});

module.exports = router;