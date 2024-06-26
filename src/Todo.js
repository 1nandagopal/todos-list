import React, { memo, useContext } from "react";
import {
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useToggleState } from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import { TodosDispatchContext } from "./contexts/todos.context";

function Todo({ id, task, completed }) {
  const [isEditing, toggleEditting] = useToggleState(false);

  const dispatch = useContext(TodosDispatchContext);

  console.log("Todo render");
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggleEditting} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() =>
              dispatch({
                type: "TOGGLE",
                id,
              })
            }
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() =>
                dispatch({
                  type: "REMOVE",
                  id,
                })
              }
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleEditting}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default memo(Todo);
