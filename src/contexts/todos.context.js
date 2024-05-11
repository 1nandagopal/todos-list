import React, { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { v4 } from "uuid";

export const TodosContext = createContext();

export function TodosProvidor(props) {
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
    <TodosContext.Provider
      value={{ todos, addTodo, removeTodo, toggleTodo, editTodo }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}
