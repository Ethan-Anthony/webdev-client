"use client";
import { useState } from "react";

const BUTTON = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white me-2";

export default function WorkingWithRemoteArrays() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const API = `${HTTP_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1", title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS", completed: false,
  });
  return (
    <div id="wd-working-with-remote-arrays">
      <h3>Working with Remote Arrays</h3>

      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className={BUTTON} href={API}>
        Get Todos
      </a>

      <h4>Retrieving an Item from an Array by ID</h4>
      <a id="wd-retrieve-todo-by-id" className={BUTTON}
        href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <input id="wd-todo-id" className="border p-1"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} />

      <h4>Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" className={BUTTON}
        href={`${API}?completed=true`}>
        Get Completed Todos
      </a>

      <h4>Creating new Items in an Array</h4>
      <a id="wd-create-todo" className={BUTTON} href={`${API}/create`}>
        Create Todo
      </a>

      <h4>Removing from an Array</h4>
      <a id="wd-remove-todo" className={"rounded bg-red-600 px-3 py-1.5 text-sm text-white me-2"}
        href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id}
      </a>

      <h4>Updating an Item in an Array</h4>
      <a id="wd-update-todo-title" className={BUTTON}
        href={`${API}/${todo.id}/title/${todo.title}`}>
        Update Todo
      </a>
      <input className="border p-1 me-2 w-16"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <input className="border p-1"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })} />

      <div className="mt-2">
        <a id="wd-update-todo-completed" className={BUTTON}
          href={`${API}/${todo.id}/completed/${todo.completed}`}>
          Complete Todo ID = {todo.id}
        </a>
        <input id="wd-todo-completed" type="checkbox"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
        <label htmlFor="wd-todo-completed" className="ms-1">Completed</label>
      </div>
      <div className="mt-2">
        <a id="wd-update-todo-description" className={BUTTON}
          href={`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`}>
          Describe Todo ID = {todo.id}
        </a>
        <input id="wd-todo-description" className="border p-1 w-96"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
      </div>
      <hr />
    </div>
  );
}
