import { FC, useState } from "react";
import { Todo, TodoListProps } from "../types/todo";

const TodoList: FC<TodoListProps> = ({
  todos,
  onRemoveTodo,
  onToggleComplete,
  onUpdateTodo,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTask, setEditTask] = useState<string>("");

  const handleEditStart = (todo: Todo) => {
    setEditingId(todo.id);
    setEditTask(todo.task);
  };

  const handleEditSave = (id: string) => {
    if (editTask.trim()) {
      onUpdateTodo(id, editTask.trim());
    }
    setEditingId(null);
    setEditTask("");
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditTask("");
  };

  return (
    <div className="todo-list-container">
      {todos.length === 0 ? (
        <p className="empty-message">No todos yet. Add one above!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.isCompleted ? "completed" : ""}`}
            >
              {editingId === todo.id ? (
                <div className="edit-mode">
                  <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                    className="edit-input"
                    autoFocus
                  />
                  <div className="edit-actions">
                    <button
                      onClick={() => handleEditSave(todo.id)}
                      className="save-btn"
                    >
                      Save
                    </button>
                    <button onClick={handleEditCancel} className="cancel-btn">
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="view-mode">
                  <div className="todo-content">
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() => onToggleComplete(todo.id)}
                      className="todo-checkbox"
                    />
                    <span className="todo-text">{todo.task}</span>
                  </div>
                  <div className="todo-actions">
                    <button
                      onClick={() => handleEditStart(todo)}
                      className="edit-btn"
                      disabled={todo.isCompleted}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onRemoveTodo(todo.id)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
