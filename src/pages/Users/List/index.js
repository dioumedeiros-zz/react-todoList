import React from "react";

import "./styles.css";

export default function List() {
  return (
    <div className="list">
      <div className="grid">
        <div className="header">
          <div>Nome</div>
          <div>Perfil</div>
          <div>Ação</div>
        </div>
        <div className="item">
          <div>Dionatan</div>
          <div>Admin</div>
          <div>Editar</div>
        </div>
      </div>
    </div>
  );
}
