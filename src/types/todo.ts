export interface Todo {
  id: string;
  task: string;
  isCompleted: boolean;
}

export interface TodoListProps {
  todos: Todo[];
  onRemoveTodo: (id: string) => void;
  onToggleComplete: (id: string) => void;
  onUpdateTodo: (id: string, newTask: string) => void;
}

export interface TodoInputProps {
  onAddTodo: (task: string) => void;
}
