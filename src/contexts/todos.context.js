import React, { createContext } from "react";
import { v4 } from "uuid";
import { useLocalStorageReducer } from "../hooks/useLocalStorage";

export const TodosStateContext = createContext();
export const TodosDispatchContext = createContext();

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: v4(), task: action.newTodoText, completed: false },
      ];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.newTodoText } : todo
      );
    default:
      return state;
  }
}

export function TodosProvidor(props) {
  const initialTodos = [{ id: 1, task: "Walk The Goldfish", completed: true }];

  const [state, dispatch] = useLocalStorageReducer(
    "todos",
    todoReducer,
    initialTodos
  );

  return (
    <TodosStateContext.Provider value={state}>
      <TodosDispatchContext.Provider value={dispatch}>
        {props.children}
      </TodosDispatchContext.Provider>
    </TodosStateContext.Provider>
  );
}
