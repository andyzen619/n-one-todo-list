var express = require("express");
var router = express.Router();

router.use("/", require("./todoList/createTaskItems/createNewTask"));
router.use("/", require("./todoList/deleteTaskItems/deleteTaskItem"));
router.use("/", require("./todoList/getTaskItems/getAllTaskItems"));
router.use("/", require("./todoList/getTaskItems/getCompletedTaskItems"));
router.use("/", require("./todoList/getTaskItems/getPendingTaskItems"));
router.use("/", require("./todoList/getTaskItems/getTasksSortedByDueDate"));
router.use("/", require("./todoList/updateTaskItems/updateTaskItem"));

module.exports = router;
