import React from "react";
import { Paper, TextField } from "@mui/material";
import { useInputState } from "./hooks/useInputState";

export default function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
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
