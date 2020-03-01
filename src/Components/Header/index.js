import React, { useContext, useState, useEffect } from "react";

import { TodoContext } from "../TodoContext";

import "./styles.css";

export default function Header() {
  const [todoList] = useContext(TodoContext);
  const [taskDone, setTaskDone] = useState("");
  const [taskNotDone, setTaskNotDone] = useState("");

  useEffect(() => {
    const filterDone = todoList.filter(todo => todo.done === "S");
    setTaskDone(filterDone);
    const filterNotDone = todoList.filter(todo => todo.done === "N");
    setTaskNotDone(filterNotDone);
  }, [todoList]);

  return (
    <div className="container-header">
      <div className="content-header">
        <nav>
          <p>TODAS TAREFAS: {todoList.length}</p>
          <p>TAREFAS CONCLUÍDAS: {taskDone.length}</p>
          <p>TAREFAS NÃO CONCLUÍDAS: {taskNotDone.length}</p>
        </nav>
      </div>
    </div>
  );
}
