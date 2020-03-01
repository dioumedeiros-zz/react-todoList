import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import Header from "../../../Components/Header";
import TodoList from "../../../Components/TodoList";
import "./styles.css";

export default function List() {
  const [selection, setSelection] = useState("T");

  return (
    <>
      <Header />
      <div className="container">
        <div className="content">
          <div className="controls">
            <select
              data-testid="data-select"
              className="select-task"
              onChange={e => setSelection(e.target.value)}
            >
              <option value="T">Todas tarefas</option>
              <option value="S">Tarefas concluídas</option>
              <option value="N">Tarefas não concluídas</option>
            </select>
            <Link data-testid="data-link" to="/register">
              <button>
                <MdAdd size={25} />
                CADASTRAR
              </button>
            </Link>
          </div>
          <TodoList filter={selection} />
        </div>
      </div>
    </>
  );
}
