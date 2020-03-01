import React from "react";

import TodoForm from "../../../Components/TodoForm";

import "./styles.css";

export default function Register({ match }) {
  return (
    <div className="container-register">
      <div className="content-register">
        <TodoForm data={match.params.task} />
      </div>
    </div>
  );
}
