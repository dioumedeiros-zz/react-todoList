import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

// import { Container } from './styles';

export default function Todo({ data, edit, exclude }) {
  return (
    <>
      <div>{data.task}</div>
      <div>{data.done === "S" ? "Concluída" : "Não concluída"}</div>
      <Link to={`/register/${encodeURIComponent(data.id)}`}>
        <MdModeEdit size={20} color="#33b9c8" />
      </Link>
      <MdDeleteForever
        size={20}
        color="#ff1a1ae8"
        onClick={() => exclude(data)}
      />
    </>
  );
}
