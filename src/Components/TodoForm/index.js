import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import history from "../../services/history";

import { TodoContext } from "../TodoContext";

import "./styles.css";

const schema = Yup.object().shape({
  task: Yup.string()
    .max(20, "Máximo de 20 caracteres")
    .required("A descrição é obrigatória")
});

export default function TodoForm({ data }) {
  const [task, setTask] = useState("");
  const [done, setDone] = useState("");
  const [detail, setDetail] = useState("");
  const [todoList, setTodoList] = useContext(TodoContext);

  const state = { YES: "S", NO: "N" };

  useEffect(() => {
    if (data) {
      const todoDetail = todoList.find(todo => todo.id === Number(data));
      if (todoDetail) {
        setDetail(todoDetail);
        setTask(todoDetail.task);

        if (todoDetail.done === "S") {
          const check = document.querySelector("#done");
          check.checked = true;
          setDone(true);
        }
      }
    }
  }, [data, todoList]);

  function handleSubmit() {
    let list;
    if (detail) {
      detail.task = task;
      detail.done = done ? state.YES : state.NO;

      list = todoList.filter(todo => todo.id !== detail.id);
      setTodoList(list);
    }

    const newList = detail ? list : todoList;

    const newDetail = detail
      ? detail
      : { id: Math.random(), task, done: done ? state.YES : state.NO };

    const newTodoList = [...newList, newDetail];

    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    toast.success("Tarefa salva com sucesso");
    history.push("/");
  }

  function cancel() {
    history.push("/");
  }

  return (
    <div className="container-form">
      <header>
        <p>{data ? "Faça sua alteração" : "Faça seu cadastro"}</p>
      </header>
      <Form data-testid="form" schema={schema} onSubmit={handleSubmit}>
        <Input
          data-testid="input-task"
          className="input-task"
          type="text"
          name="task"
          placeholder="Insira sua tarefa"
          value={task}
          onChange={e => setTask(e.target.value)}
        />

        <Input
          data-testid="input-check"
          type="checkbox"
          id="done"
          name="done"
          value={done}
          onChange={e => setDone(e.target.checked)}
        />
        <label htmlFor="done">Tarefa concluída</label>
        <div className="controls-form">
          <button className="cancel" onClick={cancel}>
            cancelar
          </button>
          <button className="save">Salvar</button>
        </div>
      </Form>
    </div>
  );
}
