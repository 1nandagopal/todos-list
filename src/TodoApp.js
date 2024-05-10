import React from "react";
import { AppBar, Paper, Toolbar, Typography, Grid } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import { v4 } from "uuid";

export default function TodoApp() {
  const initialTodos = [{ id: 1, task: "Walk The Goldfish", completed: true }];
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  function addTodo(newTodoText) {
    setTodos([...todos, { id: v4(), task: newTodoText, completed: false }]);
  }

  function removeTodo(todoId) {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  }

  function toggleTodo(todoId) {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }
  function editTodo(todoId, newTodoText) {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTodoText } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
