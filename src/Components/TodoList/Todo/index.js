import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
/**
 *
 * @param {data} param0 recebe item todo
 * @param {edit} param1 recebe função de edição
 * @param {exclude} param2 recebe função de exclusão
 */
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
