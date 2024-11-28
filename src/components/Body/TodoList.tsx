import React, { useState, useEffect } from "react";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../../modules/services/todoService";
import TodoItem from "./TodoItem";
import clsx from "clsx";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<
    { id: number; text: string; done: boolean }[]
  >([]);
  const [newTodo, setNewTodo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      setIsLoading(true);
      await addTodo(newTodo);
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
      setNewTodo("");
      setIsLoading(false);
    }
  };

  const handleUpdateTodo = async (
    id: number,
    updates: { text?: string; done?: boolean }
  ) => {
    await updateTodo(id, updates);
    const updatedTodos = await getTodos();
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    const updatedTodos = await getTodos();
    setTodos(updatedTodos);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <main className="flex flex-col items-center justify-start w-full font-montserrat">
      <section className="w-full max-w-2xl p-4 rounded shadow-md bg-white px-24 mb-4">
        <div>
          <div className="relative pt-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="What would you like to do"
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="pt-8">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button
              onClick={handleAddTodo}
              disabled={isLoading}
              className={clsx("btn", { "btn-loading": isLoading })}
            >
              {isLoading ? "is loading..." : "Add Todo"}
            </button>
          </div>
        </div>
      </section>
      <section className="w-full max-w-2xl p-4 rounded shadow-md bg-white px-24">
        <div>
          <h3 className="text-center text-2xl py-6">Your tasks list</h3>
          <nav className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <p className="text-center">Status</p>
            </div>
            <div className="col-span-2">
              <p className="text-center">Task</p>
            </div>
            <div className="col-span-1">
              <p className="text-center">Remove</p>
            </div>
          </nav>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdateTodo}
              onDelete={handleDeleteTodo}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default TodoList;
