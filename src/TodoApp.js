import React from "react";
import { AppBar, Paper, Toolbar, Typography, Grid } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodosProvidor } from "./contexts/todos.context";

export default function TodoApp() {
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
          <TodosProvidor>
            <TodoForm />
            <TodoList />
          </TodosProvidor>
        </Grid>
      </Grid>
    </Paper>
  );
}
