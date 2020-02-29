import React, { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [todoList, setTodoList] = useState([
    {
      task: "Make a good test",
      done: "N"
    }
  ]);

  return (
    <TodoContext.Provider value={[todoList, setTodoList]}>
      {props.children}
    </TodoContext.Provider>
  );
};
