import React from "react";
import clsx from "clsx";
import { FaTrash } from "react-icons/fa";

interface TodoItemProps {
  todo: { id: number; text: string; done: boolean };
  onUpdate: (id: number, updates: { text?: string; done?: boolean }) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onUpdate, onDelete }) => {
  return (
    <article className="grid grid-cols-4 items-center p-2 border-b font-montserrat">
      <div className="col-span-1">
        <button
          onClick={() => onUpdate(todo.id, { done: !todo.done })}
          title="Status"
          className={clsx(
            "p-2 border rounded",
            todo.done ? "bg-green-500 text-white" : "bg-red-500 text-white"
          )}
        >
          {todo.done ? "Complete" : "Pending"}
        </button>
      </div>
      <div className="col-span-2 text-center">
        <p className={todo.done ? "line-through" : ""} title="Task">
          {todo.text}
        </p>
      </div>
      <div className="col-span-1 flex justify-center">
        <button
          onClick={() => onDelete(todo.id)}
          title="Remove"
          className="p-2"
        >
          <FaTrash className="text-red-500" />
        </button>
      </div>
    </article>
  );
};

export default TodoItem;
