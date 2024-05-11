import React, { useContext } from "react";
import { Paper, TextField } from "@mui/material";
import { useInputState } from "./hooks/useInputState";
import { TodosDispatchContext } from "./contexts/todos.context";

export default function TodoForm() {
  const [value, handleChange, reset] = useInputState("");

  const dispatch = useContext(TodosDispatchContext);

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "ADD",
            newTodoText: value,
          });
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New ToDo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
