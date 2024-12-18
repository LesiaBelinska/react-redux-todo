import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
  headers: { "Content-Type": "application/json" },
});

export const fetchTodosApi = () => axiosInstance.get("/");

export const createTodoApi = (todo) => axiosInstance.post("/", todo);

export const updateTodoApi = (id, updates) => axiosInstance.put(`/${id}`, updates);

export const deleteTodoApi = (id) => axiosInstance.delete(`/${id}`);
