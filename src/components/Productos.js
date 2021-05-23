import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Logo from "../styles/logo.png";

const Productos = (props) => {
  return (
    <div className="container">
      <div className="text-center my-5">
        <h1>Productos</h1>
      </div>
      <div className="listado">
        <ListGroup>
          {props.articulos.map((articulo) => 
              (
            <ListGroup.Item className="mb-3 border border-dark">
              <Row>
                <Col sm={12} md={4}>
                  <Image src={Logo} rounded className="img-fluid"></Image>
                </Col>
                <Col sm={12} md={8}>
                  <h2>{articulo.titulo}</h2>
                  <p>{props.descripcion}</p>
                  <p>
                    <span className="px-3 etiqueta">
                      {articulo.descripcion}
                    </span>
                  </p>
                  <p>
                    <span className="px-3 etiqueta">$ {articulo.precio}</span>
                  </p>
                </Col>
              </Row>
            </ListGroup.Item>)
          )}
        </ListGroup>
      </div>
    </div>
  );
};

export default Productos;
