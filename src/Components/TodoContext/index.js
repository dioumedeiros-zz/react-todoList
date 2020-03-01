import React, { useState, useEffect, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: "Make a good test",
      done: "N"
    },
    {
      id: 2,
      task: "Make it happen",
      done: "S"
    }
  ]);

  /**
   * Utilizado useEffect para atualizar context com localStorage
   */
  useEffect(() => {
    const newTodoList = localStorage.getItem("todoList");

    if (newTodoList) {
      setTodoList(JSON.parse(newTodoList));
    }
  }, []);

  return (
    <TodoContext.Provider value={[todoList, setTodoList]}>
      {props.children}
    </TodoContext.Provider>
  );
};
