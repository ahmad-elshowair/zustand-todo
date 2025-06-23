import { Add as AddIcon } from "@mui/icons-material";
import { Box, Button, Paper, TextField } from "@mui/material";
import { FC, FormEvent, useState } from "react";
import { TodoInputProps } from "../types/todo";

const TodoInput: FC<TodoInputProps> = ({ onAddTodo }) => {
  const [task, setTask] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTodo(task.trim());
      setTask("");
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 2, mb: 3, boxShadow: "none" }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", gap: 1 }}
      >
        <TextField
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new todo..."
          variant="outlined"
          size="small"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          size="small"
          sx={{ minWidth: 100 }}
        >
          Add
        </Button>
      </Box>
    </Paper>
  );
};

export default TodoInput;
