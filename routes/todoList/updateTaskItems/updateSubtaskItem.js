var express = require("express");
var router = express.Router();
var pool = require("../../../db/db");

/**
 * Assings new parent task to a sub task.
 */
router.put("/update/subTasks/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  const newParentTaskId = req.body.newParentTaskId;
  console.log("Changing parentTask of subTask id: ", Number(taskId));

  pool.query(`update todolistitems set parent_task_id = ${Number(newParentTaskId)}
  where id = ${taskId}`)
  .then(q_res=>{
    res.send(`Task id ${taskId} has updated parent task to task id ${newParentTaskId}`)
  })
  .catch(q_err=> {
    console.log(q_err);
    res.send("There was an error processing this request, please try again.");
  })
})

module.exports = router;