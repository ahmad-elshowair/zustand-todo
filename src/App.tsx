import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import {
  Box,
  Chip,
  Container,
  createTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { FC } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useTodoStore } from "./store/todoStore";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3b8223",
    },
    background: {
      default: "#f8fafc",
    },
  },
  typography: {
    h3: {
      fontWeight: 700,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
  },
});

const App: FC = () => {
  const { todos } = useTodoStore();

  const completedCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h3" color="primary" gutterBottom>
              Todo List
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Manage your tasks efficiently
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <TodoInput />
            <TodoList />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              pt: 3,
              borderTop: 1,
              borderColor: "divider",
            }}
          >
            <Chip
              icon={<RadioButtonUnchecked />}
              label={`Total: ${todos.length}`}
              variant="outlined"
              color="primary"
            />
            <Chip
              icon={<CheckCircle />}
              label={`Completed: ${completedCount}`}
              variant="outlined"
              color="success"
            />
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
