import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Todo } from "./types/todo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      task,
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const updateTodo = (id: string, newTask: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
  };

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>Todo App</h1>
          <p>Manage your tasks efficiently</p>
        </header>

        <main className="app-main">
          <TodoInput onAddTodo={addTodo} />
          <TodoList
            todos={todos}
            onRemoveTodo={removeTodo}
            onToggleComplete={toggleComplete}
            onUpdateTodo={updateTodo}
          />
        </main>

        <footer className="app-footer">
          <p>
            Total: {todos.length} | Completed:{" "}
            {todos.filter((t) => t.isCompleted).length}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
