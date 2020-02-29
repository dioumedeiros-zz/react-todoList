import React, { useState, useContext } from "react";
import { TodoContext } from "../TodoContext";

import "./styles.css";

export default function TodoForm() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useContext(TodoContext);

  const state = { YES: "S", NO: "N" };

  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, { task, done: state.NO }]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <select className="select-task">
        <option value="T">Todas tarefas</option>
        <option value="S">Tarefas concluídas</option>
        <option value="N">Tarefas não concluídas</option>
      </select>
      <input
        className="input-task"
        type="text"
        name="task"
        placeholder="Insira sua atividade"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
