import React, { Fragment, useState } from "react";
import { auth } from "../firebase/firebase";

const Registro = () => {
  const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");

  const RegistrarUsuario = (e) => {
      e.preventDefault();
      try{
        auth.createUserWithEmailAndPassword(email, pass);
        alert('Usuario registrado');
      }catch(e){
          console.log(e);
      }
  }

  return (
    <Fragment>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin">
                Admin
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="row mt-5">
        <div className="col"></div>
        <div className="col">
          <form className="form-group" onSubmit={RegistrarUsuario}>
            <input
              className="form-control"
              type="text"
              placeholder="Introduce tu email"
              onChange={(e) =>(setEmail(e.target.value))}
            />
            <input
              className="form-control mt-4"
              type="password"
              placeholder="Introduce tu password"
              onChange={(e) =>(setPass(e.target.value))}
            />
            <input
              type="submit"
              value="Registrar Usuario"
              className="btn btn-dark btn-block mt-4"
            />
          </form>
        </div>
        <div className="col"></div>
      </div>
    </Fragment>
  );
};

export default Registro;
