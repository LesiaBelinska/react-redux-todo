import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import TodoForm from "../../components/TodoForm/TodoForm.jsx";
import TodoList from "../../components/TodoList/TodoList.jsx";
import s from "./HomePage.module.css";
import * as api from "../../services/todos-api.js";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await api.getTodos();
        setTodos(response);
      } catch (error) {
        console.error("Error fetching todos:", error.message);
        toast.error("Failed to fetch todos. Please try again later.");
      }
    };
    fetchTodos();
  }, []);

  const addNewTodo = async (taskText) => {
    const newTodo = { text: taskText, status: false };
    try {
      const createdTodo = await api.createTodo(newTodo);
      setTodos((prevTodos) => [...prevTodos, createdTodo]);
      toast.success("Todo successfully added!");
    } catch (error) {
      console.error("Error creating todo:", error.message);
      toast.error("Failed to add todo. Please try again.");
    }
  };

  const toggleTodoStatus = async (id, currentStatus) => {
    const updatedStatus = !currentStatus;
    try {
      const updatedTodo = await api.updateTodo(id, { status: updatedStatus });
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, status: updatedTodo.status } : todo
        )
      );
      toast.success(
        `Todo status updated to ${updatedStatus ? "completed" : "incomplete"}!`
      );
    } catch (error) {
      console.error("Error updating todo:", error.message);
      toast.error("Failed to update todo status. Please try again.");
    }
  };

  const deleteTodo = async (id) => {
    try {
      await api.deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
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
          onDeleteTodo={deleteTodo}
        />
      </div>
    </>
  );
};

export default HomePage;
