import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/todos";

// Get all todos
export const getTodos = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Create a new todo
export const createTodo = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

// Mark a todo as completed
export const completeTodo = async (id) => {
  const res = await axios.patch(`${API_URL}/${id}/complete`);
  return res.data;
};

// Delete a todo
export const deleteTodo = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
