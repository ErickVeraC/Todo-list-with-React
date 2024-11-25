import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("API_URL is not defined");
}

export const getTodos = async () => {
  const response = await axios.get(API_URL);
  console.log("getTodos response:", response.data);
  return response.data;
};

export const addTodo = async (text: string) => {
  const response = await axios.post(API_URL, { text });
  console.log("addTodo response:", response.data);
  return response.data;
};

export const updateTodo = async (
  id: number,
  updates: { text?: string; done?: boolean }
) => {
  const response = await axios.put(`${API_URL}/${id}`, updates);
  console.log("updateTodo response:", response.data);
  return response.data;
};

export const deleteTodo = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  console.log("deleteTodo response:", response.data);
};
