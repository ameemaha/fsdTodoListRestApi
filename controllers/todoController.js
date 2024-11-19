const Todo = require("../models/todoSchema");

const getAll = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
};

const getById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      res.status(404).json({ msg: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
};

const addTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const todo = await Todo.create({ title, description, completed });
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const update_todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true }
    );
    if (!update_todo) {
      res.status(404).json({ msg: "Todo item not found" });
    }
    res.status(201).json(update_todo);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const delete_todo = await Todo.findByIdAndDelete(req.params.id);
    if (!delete_todo) {
      res.status(404).json({ msg: "Todo item not found" });
    }
    res.status(200).json(delete_todo);
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
};

module.exports = { getAll, addTodo, updateTodo, deleteTodo, getById };
