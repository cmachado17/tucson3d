import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../styles/logo.png";

const UltimasNovedades = () => {

    const articulos = [
        {
            id: 1,
            titulo: 'Titulo',
            descripcion: 'Esto es una descripcion que deberia ser un poco mas larga',
            precio: 300,
            foto: {Logo}
        },
        {
            id: 2,
            titulo: 'Titulo2',
            descripcion: 'Esto es una descripcion que deberia ser un poco mas larga',
            precio: 800,
            foto: {Logo}
        },
        {
            id: 3,
            titulo: 'Titulo3',
            descripcion: 'Esto es una descripcion que deberia ser un poco mas larga',
            precio: 1300,
            foto: {Logo}
        },
        {
            id: 4,
            titulo: 'Titulo4',
            descripcion: 'Esto es una descripcion que deberia ser un poco mas larga',
            precio: 500,
            foto: {Logo}
        }
    ]


  return (
    <Fragment>
      <Row>
    {articulos.map(articulo => {
        return(
            <Col md={4} className="mt-5">
            <Card>
              <Card.Img variant="top" src={Logo} />
              <Card.Body>
                <Card.Title>{articulo.titulo}</Card.Title>
                <Card.Text>
                  {articulo.descripcion}
                </Card.Text>
                <span>$ {articulo.precio}</span>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        )
    })}
      </Row>
    </Fragment>
  );
};

export default UltimasNovedades;
