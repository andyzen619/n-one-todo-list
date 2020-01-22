var express = require("express");
var router = express.Router();
var pool = require("../../../db/db");

router.get("/getAll/subTasks/:parentTaskId", (req, res) => {
  const parentTaskId = req.params.parentTaskId;

  console.log("Getting all sub tasks of task id: ", Number(parentTaskId));

  pool.query(`select * from todolistitems where parent_task_id = ${parentTaskId}`)
  .then(q_res=>{
    res.send(q_res.rows);
  })
  .catch(q_err=> {
    console.log(q_err);
    res.send("There was an error processing this request, please try again.");
  })
})

module.exports = router;