import { createContext, useContext, useState } from "react";

export type Todo = {
  id: string;
  title: string;
};

export type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
};

const initialTodos: Todo[] = [
  { id: "1", title: "Learn React Context" },
  { id: "2", title: "Build a todo list" },
];

const newId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export const TodosContext = createContext<TodosContextValue | null>(null);

export function useTodosState(): TodosContextValue {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    setTodos((prev) => [...prev, { id: newId(), title: trimmed }]);
  };

  const updateTodo = (id: string, title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title: trimmed } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, updateTodo, deleteTodo };
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosContext.Provider");
  }
  return value;
}
