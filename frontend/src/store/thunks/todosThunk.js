import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchTodosApi,
  createTodoApi,
  updateTodoApi,
  deleteTodoApi,
} from "../../services/todos-api.js";
import toast from "react-hot-toast";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, thunkAPI) => {
    try {
      const response = await fetchTodosApi();
      return response.data;
    } catch (error) {
      toast.error("Failed to fetch todos. Please try again later.");
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const createNewTodo = createAsyncThunk(
  "todos/createTodo",
  async (todo, thunkAPI) => {
    try {
      const response = await createTodoApi(todo);
      toast.success("Todo successfully added!");
      return response.data;
    } catch (error) {
      toast.error("Failed to add todo. Please try again.");
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, updates }, thunkAPI) => {
    try {
      await updateTodoApi(id, updates);
      const updatedStatus = updates.status;
      toast.success(
        `Todo status updated to ${updatedStatus ? "completed" : "incomplete"}!`
      );
      return { id, updates };
    } catch (error) {
      toast.error("Failed to update todo.");
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, thunkAPI) => {
    try {
      await deleteTodoApi(id);
      toast.success("Todo successfully deleted!");
      return id;
    } catch (error) {
      toast.error("Failed to delete todo. Please try again.");
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
