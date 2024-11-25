import React from "react";

interface TodoItemProps {
  todo: { id: number; text: string; done: boolean };
  onUpdate: (id: number, updates: { text?: string; done?: boolean }) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onUpdate, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onUpdate(todo.id, { done: !todo.done })}
      />
      <span className={todo.done ? "line-through" : ""}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
