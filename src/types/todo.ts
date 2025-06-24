export interface Todo {
  id: string;
  task: string;
  isCompleted: boolean;
}

export interface TodoStore {
  todos: Todo[];
  addTodo: (task: string) => void;
  updateTodo: (id: string, task: string) => void;
  removeTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
}

export interface TodoInputProps {
  onAddTodo: (task: string) => void;
}

export interface TodoItemProps {
  todo: Todo;
}
