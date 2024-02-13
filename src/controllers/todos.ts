import { RequestHandler } from "express";
import { Todo } from "../models/todos";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const { text } = req.body as { text: string };
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.status(201).json({ message: "todo created", createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ message: "success", todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const { text } = req.body as { text: string };

  const todoUpdate = TODOS.find((todo) => {
    return todo.id === todoId;
  });
  if (!todoUpdate) {
    throw new Error("Could not find todo!");
  }
  todoUpdate.text = text;

  res
    .status(200)
    .json({ message: "Todo updated successfully!", todo: todoUpdate });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex = TODOS.findIndex((todo) => {
    return todo.id === todoId;
  });
  if (todoIndex < 0) {
    throw new Error("Could not find todo!");
  }

  TODOS.splice(todoIndex, 1);

  res.status(200).json({ message: "Todo deleted successfully!", todos: TODOS });
};
