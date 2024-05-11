import React, { useContext } from "react";
import { List, Paper, Divider } from "@mui/material";
import Todo from "./Todo";
import { TodosStateContext } from "./contexts/todos.context";

export default function TodoList() {
  const todos = useContext(TodosStateContext);

  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <React.Fragment key={i}>
            <Todo {...todo} key={todo.id} />
            {i < todos.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
