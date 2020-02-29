import React, { useState, useContext } from "react";

import { TodoContext } from "../TodoContext";
import TodoForm from "../TodoForm";

import "./styles.css";

export default function TodoList() {
  const [todoList, setTodoList] = useContext(TodoContext);

  return (
    <>
      <TodoForm />
      <div className="grid">
        <div className="header">
          <div>Nome</div>
          <div>Estado</div>
          <div>Ações</div>
        </div>
        <div className="items">
          {todoList.map(todo => (
            <>
              <div>{todo.task}</div>
              <div>{todo.done === "S" ? "Finalizada" : ""}</div>
              <div>Deletar</div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
