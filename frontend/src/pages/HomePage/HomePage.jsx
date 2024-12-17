import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import TodoForm from "../../components/TodoForm/TodoForm.jsx";
import TodoList from "../../components/TodoList/TodoList.jsx";
import {
  setTodos,
  addTodo,
  updateTodoStatus,
  deleteTodo,
} from "../../store/slices/todoSlicer.js";

import * as api from "../../services/todos-api.js";
import s from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const totalTodos = todos.length;

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await api.getTodos();
        dispatch(setTodos(response));
      } catch (error) {
        console.error("Error fetching todos:", error.message);
        toast.error("Failed to fetch todos. Please try again later.");
      }
    };
    fetchTodos();
  }, [dispatch]);

  const addNewTodo = async (taskText) => {
    const newTodo = { text: taskText, status: false };
    try {
      const createdTodo = await api.createTodo(newTodo);
      dispatch(addTodo(createdTodo));
      toast.success("Todo successfully added!");
    } catch (error) {
      console.error("Error creating todo:", error.message);
      toast.error("Failed to add todo. Please try again.");
    }
  };

  const toggleTodoStatus = async (id, currentStatus) => {
    const updatedStatus = !currentStatus;
    try {
      await api.updateTodo(id, { status: updatedStatus });
      dispatch(updateTodoStatus({ id, status: updatedStatus }));
      toast.success(
        `Todo status updated to ${updatedStatus ? "completed" : "incomplete"}!`
      );
    } catch (error) {
      console.error("Error updating todo:", error.message);
      toast.error("Failed to update todo status. Please try again.");
    }
  };

  const removeTodo = async (id) => {
    try {
      await api.deleteTodo(id);
      dispatch(deleteTodo(id));
      toast.success("Todo successfully deleted!");
    } catch (error) {
      console.error("Error deleting todo:", error.message);
      toast.error("Failed to delete todo. Please try again.");
    }
  };

  return (
    <>
      <div className={s.container}>
        <h1 className={s.title}>To-Do List</h1>
        <TodoForm onSubmit={addNewTodo} />
        <TodoList
          todos={todos}
          onToggleStatus={toggleTodoStatus}
          onDeleteTodo={removeTodo}
        />
      </div>
      <div className={s.container}>
        <h3 className={s.subtitle}>Total todos: {totalTodos}</h3>
      </div>
    </>
  );
};

export default HomePage;
