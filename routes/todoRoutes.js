const express = require("express");
const todoController = require("../controllers/todoController");
const router = express.Router();

router.get("/todos", todoController.getAll);
router.get("/todos/:id", todoController.getById);
router.post("/new", todoController.addTodo);
router.put("/update/:id", todoController.updateTodo);
router.delete("/delete/:id", todoController.deleteTodo);

module.exports = router;
