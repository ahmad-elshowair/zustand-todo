import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { TodoStore } from "../types/todo";

export const useTodoStore = create<TodoStore>((set) => ({
  // INITIAL STATE
  todos: [],

  // ACTIONS
  addTodo: (task: string) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: uuidv4(),
          task,
          isCompleted: false,
        },
      ],
    }));
  },

  updateTodo: (id: string, task: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, task: task.trim() } : todo
      ),
    })),

  removeTodo: (id: string) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),

  toggleComplete: (id: string) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    }));
  },
}));
