import {
  Cancel as CancelIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { FC, KeyboardEvent, useState } from "react";
import { TodoItemProps } from "../types/todo";

const TodoItem: FC<TodoItemProps> = ({
  todo,
  onRemove,
  onToggleComplete,
  onUpdate,
  showDivider = false,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>("");

  const handleEditStart = () => {
    setIsEditing(true);
    setEditTask(todo.task);
  };

  const handleEditSave = () => {
    if (editTask.trim()) {
      onUpdate(todo.id, editTask.trim());
    }
    setIsEditing(false);
    setEditTask("");
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditTask("");
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleEditSave();
    } else if (e.key === "Escape") {
      handleEditCancel();
    }
  };

  return (
    <ListItem
      sx={{
        opacity: todo.isCompleted ? 0.6 : 1,
        backgroundColor: todo.isCompleted ? "action.hover" : "transparent",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: "action.hover",
        },
        p: 1,
        borderRadius: 2,
      }}
      divider={showDivider}
    >
      {isEditing ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
            onKeyDown={handleKeyPress}
            variant="outlined"
            size="small"
            autoFocus
            placeholder="Update your todo..."
          />
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={handleEditSave}
              variant="contained"
              color="success"
              size="small"
              startIcon={<SaveIcon />}
              disabled={!editTask.trim()}
            >
              Save
            </Button>
            <Button
              onClick={handleEditCancel}
              variant="outlined"
              color="inherit"
              size="small"
              startIcon={<CancelIcon />}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      ) : (
        <>
          <ListItemIcon>
            <Checkbox
              checked={todo.isCompleted}
              onChange={() => onToggleComplete(todo.id)}
              color="primary"
            />
          </ListItemIcon>
          <ListItemText
            primary={todo.task}
            sx={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
              color: todo.isCompleted ? "text.secondary" : "text.primary",
              "& .MuiListItemText-primary": {
                fontSize: "1rem",
                fontWeight: todo.isCompleted ? 400 : 600,
              },
            }}
          />
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              onClick={handleEditStart}
              color="primary"
              size="small"
              disabled={todo.isCompleted}
              title="Edit todo"
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => onRemove(todo.id)}
              color="error"
              size="small"
              title="Delete todo"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </>
      )}
    </ListItem>
  );
};

export default TodoItem;
