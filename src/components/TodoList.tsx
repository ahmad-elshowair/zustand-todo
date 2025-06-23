import { Box, List, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onRemoveTodo: (id: string) => void;
  onToggleComplete: (id: string) => void;
  onUpdateTodo: (id: string, newTask: string) => void;
}

const TodoList: FC<TodoListProps> = ({
  todos,
  onRemoveTodo,
  onToggleComplete,
  onUpdateTodo,
}) => {
  return (
    <Paper elevation={2} sx={{ minHeight: 300, boxShadow: "none" }}>
      {todos.length === 0 ? (
        <Box sx={{ p: 4, textAlign: "center" }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontStyle: "italic" }}
          >
            No todos yet. Add one above!
          </Typography>
        </Box>
      ) : (
        <List sx={{ p: 0 }}>
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onRemove={onRemoveTodo}
              onToggleComplete={onToggleComplete}
              onUpdate={onUpdateTodo}
              showDivider={index < todos.length - 1}
            />
          ))}
        </List>
      )}
    </Paper>
  );
};

export default TodoList;
