const API_URL = "http://localhost:3000/todos";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not Found"));
}

export function getTodos() {
  return fetchWithErrorHandling(API_URL);
}

export function createTodo(todo) {
  return fetchWithErrorHandling(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
    credentials: "include",
  });
}

export function updateTodo(id, updates) {
  return fetchWithErrorHandling(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
    credentials: "include",
  });
}

export function deleteTodo(id) {
    return fetchWithErrorHandling(`${API_URL}/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
}
