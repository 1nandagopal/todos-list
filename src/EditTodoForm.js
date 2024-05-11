import React, { useContext } from "react";
import { useInputState } from "./hooks/useInputState";
import { TextField } from "@mui/material";
import { TodosDispatchContext } from "./contexts/todos.context";

function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);

  const dispatch = useContext(TodosDispatchContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "EDIT",
          id: id,
          newTodoText: value,
        });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;
