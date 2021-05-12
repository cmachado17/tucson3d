import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./Formulario";
import { db } from "../firebase/firebase";

const Entradas = () => {

  const [entradas, setEntradas] = useState([]);
  const [currentId, setCurrentId] = useState('');

  const escribirBd = async (registro) => {
    if(currentId === ''){
      await db.collection("registros").doc().set(registro);
      console.log("Registro creado exitosamente");
    }else{
      db.collection("registros").doc(currentId).update(registro)
    }
  
  };

  const cargarEntradas = async () => {
    db.collection("registros").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      //console.log(docs);
      setEntradas(docs);
    });
  };

  const borrarEntradas = async(id) =>{
     if(window.confirm('Seguro que deseas borrar este registro?')){
      await db.collection('registros').doc(id).delete();
     }else{}
  }

  const editarEntradas = async(id) =>{
    setCurrentId(id)
  }

  useEffect(() => {
    cargarEntradas();
  }, []);

  return (
    <Fragment>
      <Formulario escribirBd={escribirBd} currentId={currentId} entradas={entradas}/>
      {entradas.map(entrada =>(
      <div className="card" key={entrada.id}>
          <h1>{entrada.nombre}</h1>
          <h2>{entrada.edad}</h2>
          <button className="btn btn-danger" onClick={() => borrarEntradas(entrada.id)} >Borrar</button>
          <button className="btn btn-warning" onClick={() => editarEntradas(entrada.id)}>Editar</button>
      </div>
      ))}
    </Fragment>
  );
};

export default Entradas;
