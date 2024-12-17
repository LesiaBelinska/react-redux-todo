import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { todos: [] },
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    updateTodoStatus(state, action) {
      const { id, status } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.status = status;
      }
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { setTodos, addTodo, updateTodoStatus, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
