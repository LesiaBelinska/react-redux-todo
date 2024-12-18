import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import TodoForm from "../../components/TodoForm/TodoForm.jsx";
import TodoList from "../../components/TodoList/TodoList.jsx";
import {
  fetchTodos,
  createNewTodo,
  updateTodo,
  deleteTodo,
} from "../../store/thunks/todosThunk.js";

import s from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector((state) => state.todos);
  const totalTodos = todos.length;

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const addNewTodo = (taskText) => {
    const newTodo = { text: taskText, status: false };
    dispatch(createNewTodo(newTodo));
  };

  const toggleTodoStatus = (id, currentStatus) => {
    const updatedStatus = { status: !currentStatus };
    dispatch(updateTodo({ id, updates: updatedStatus }));
  };

  const removeTodo = (id) => {
   dispatch(deleteTodo(id));
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
          isLoading={isLoading}
        />
      </div>
      <div className={s.container}>
        <h3 className={s.subtitle}>Total todos: {totalTodos}</h3>
      </div>
    </>
  );
};

export default HomePage;
