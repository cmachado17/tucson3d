import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../styles/logo.png";

const UltimasNovedades = (props) => {

  return (
    <Fragment>
      <Row>
    {props.articulos.map(articulo => {
        return(
            <Col md={4} className="mt-5" key={articulo.id}>
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
