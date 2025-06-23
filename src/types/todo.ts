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

export interface TodoItemProps {
  todo: Todo;
  onRemove: (id: string) => void;
  onToggleComplete: (id: string) => void;
  onUpdate: (id: string, newTask: string) => void;
  showDivider?: boolean;
}
