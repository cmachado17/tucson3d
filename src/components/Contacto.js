import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contacto = () => {
  return (
    <div className="container my-5 formulario-contacto px-5 py-3">
      <Form>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu telefono" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={4} />
          <Form.Text className="text-muted">Ingresa tu consulta</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Contacto;
