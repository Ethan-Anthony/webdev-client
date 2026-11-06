"use client";

import { useState, type ReactNode } from "react";
import {
  TodosContext,
  useTodosContext,
  useTodosState,
  type Todo,
} from "./todosContext";

const input = "rounded border border-neutral-300 px-3 py-1.5";
const button = "rounded px-3 py-1.5 text-sm font-medium text-white";

function TodosProvider({ children }: { children: ReactNode }) {
  const value = useTodosState();
  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
}

function TodoForm() {
  const { addTodo } = useTodosContext();
  const [title, setTitle] = useState("");
  const add = () => {
    addTodo(title);
    setTitle("");
  };
  return (
    <div className="mb-2 flex gap-2">
      <input
        id="wd-context-todo-title"
        className={input}
        placeholder="New todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && add()}
      />
      <button
        type="button"
        id="wd-context-todo-add-click"
        onClick={add}
        className={`${button} bg-green-600`}
      >
        Add
      </button>
    </div>
  );
}

function TodoItem({ todo }: { todo: Todo }) {
  const { updateTodo, deleteTodo } = useTodosContext();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.title);

  const save = () => {
    updateTodo(todo.id, draft);
    setEditing(false);
  };
  const cancel = () => {
    setDraft(todo.title);
    setEditing(false);
  };

  return (
    <li
      id={`wd-context-todo-${todo.id}`}
      className="mb-1 flex items-center gap-2 rounded border border-neutral-200 px-3 py-1"
    >
      {editing ? (
        <>
          <input
            className={`${input} flex-1`}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") save();
              if (e.key === "Escape") cancel();
            }}
            autoFocus
          />
          <button type="button" onClick={save} className={`${button} bg-blue-600`}>
            Save
          </button>
          <button type="button" onClick={cancel} className={`${button} bg-neutral-500`}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className="flex-1">{todo.title}</span>
          <button
            type="button"
            onClick={() => {
              setDraft(todo.title);
              setEditing(true);
            }}
            className={`${button} bg-yellow-600`}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => deleteTodo(todo.id)}
            className={`${button} bg-red-600`}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}

function TodoItems() {
  const { todos } = useTodosContext();
  if (todos.length === 0) return <p>No todos yet.</p>;
  return (
    <ul className="m-0 max-w-md list-none p-0">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default function ReactContextTodoList() {
  return (
    <div id="wd-react-context-todo-list">
      <h2>React Context Todo List</h2>
      <TodosProvider>
        <TodoForm />
        <TodoItems />
      </TodosProvider>
      <hr />
    </div>
  );
}
