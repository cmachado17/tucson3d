import React, { Fragment, useState, useEffect, useDebugValue } from "react";
import { db } from "../firebase/firebase";

const Formulario = (props) => {
  const valorInicial = { nombre: "", edad: "" };

  const [registro, setRegistro] = useState({ ...valorInicial });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.escribirBd(registro);
    setRegistro({ ...valorInicial });
  };

  const agregar = (e) => {
    const { name, value } = e.target;
    setRegistro({ ...registro, [name]: value });
  };

  const getEntradaPorId = async (id) => {
    const doc = await db.collection("registros").doc(id).get();
    setRegistro({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setRegistro({ ...valorInicial });
    } else {
      getEntradaPorId(props.currentId);
    }
  }, [props.currentId]);

  return (
    <Fragment>
      <div className="my-5">
        <form className="form-group" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Escribe tu nombre"
            className="form-control mb-3"
            name="nombre"
            onChange={agregar}
            value={registro.nombre}
          />
          <input
            type="text"
            placeholder="Escribe tu edad"
            className="form-control mb-3"
            name="edad"
            onChange={agregar}
            value={registro.edad}
          />
          <input
            type="submit"
            value={props.currentId ? "Editar" : "Enviar"}
            className="btn btn-success btn-block"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Formulario;
