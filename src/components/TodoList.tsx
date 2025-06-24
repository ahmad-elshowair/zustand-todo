import { Box, List, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { useTodoStore } from "../store/todoStore";
import TodoItem from "./TodoItem";

const TodoList: FC = () => {
  const { todos } = useTodoStore();
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
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </List>
      )}
    </Paper>
  );
};

export default TodoList;
