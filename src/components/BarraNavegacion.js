import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from 'react-router-dom';

const BarraNavegacion = () => {
  return (
    <Navbar expand="lg" bg="light" className="p-0 barra-navegacion">
        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav className="mx-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/sobrenosotros">Sobre nosotros</Link></Nav.Link>
          <Nav.Link><Link to="/productos">Productos</Link></Nav.Link>
          {/* <NavDropdown title="Productos">
          <NavDropdown.Item><Link to="/productos">Mates</Link></NavDropdown.Item> 
          <NavDropdown.Item><Link to="/productos">Figuras</Link></NavDropdown.Item> 
          <NavDropdown.Item><Link to="/productos">Soportes</Link></NavDropdown.Item> 
          <NavDropdown.Item><Link to="/productos">Llaveros</Link></NavDropdown.Item> 
          </NavDropdown> */}
          <Nav.Link><Link to="/contacto">Contacto</Link></Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default BarraNavegacion;
