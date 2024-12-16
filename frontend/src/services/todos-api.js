import axios from "axios";

const API_URL = "http://localhost:3000/todos";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

async function axiosWithErrorHandling(promise) {
  try {
    const response = await promise;
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Not Found");
  }
}

export function getTodos() {
  return axiosWithErrorHandling(axiosInstance.get("/"));
}

export function createTodo(todo) {
  return axiosWithErrorHandling(axiosInstance.post("/", todo));
}

export function updateTodo(id, updates) {
  return axiosWithErrorHandling(axiosInstance.put(`/${id}`, updates));
}

export function deleteTodo(id) {
  return axiosWithErrorHandling(axiosInstance.delete(`/${id}`));
}
