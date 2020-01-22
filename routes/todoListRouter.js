var express = require("express");
var router = express.Router();

//Creates the root router of all todo List routes
router.use("/", require("./todoList/createTaskItems/createNewTask"));
router.use("/", require("./todoList/deleteTaskItems/deleteTaskItem"));
router.use("/", require("./todoList/getTaskItems/getAllTaskItems"));
router.use("/", require("./todoList/getTaskItems/getCompletedTaskItems"));
router.use("/", require("./todoList/getTaskItems/getPendingTaskItems"));
router.use("/", require("./todoList/getTaskItems/getTasksSortedByDueDate"));
router.use("/", require("./todoList/updateTaskItems/updateTaskItem"));
router.use("/", require("./todoList/getTaskItems/getTaskItemByCategory"));
router.use("/", require("./todoList/getTaskItems/getAllSubTaskItems"));
router.use("/", require("./todoList/updateTaskItems/updateSubtaskItem"));
router.use("/", require("./todoList/createTaskItems/addSubTask"));

module.exports = router;
