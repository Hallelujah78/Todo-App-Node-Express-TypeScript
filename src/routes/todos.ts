import { Router } from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

const router = Router();

// add a todo
router.post("/", createTodo);

// get all todos
router.get("/", getTodos);

// edit todo
router.patch("/:id", updateTodo);

// delete todo
router.delete("/:id", deleteTodo);

export default router;
