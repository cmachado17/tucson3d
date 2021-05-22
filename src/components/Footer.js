import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="bg-dark text-light">
      <div className="container">
        <Row className="py-3">
          <Col md={6} className="my-auto">
            <ul>
              <li>Trabajamos con seña.</li>
              <li>Encarga tu pedido con tiempo.</li>
              <li>Hacemos entregas por zona Ballester y CABA barrio Flores.</li>
              <li>Buscas personalizados? Escribinos.</li>
              <li>Descuento por grandes cantidades</li>
            </ul>
          </Col>
          <Col md={6} className="w-100 text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13148.357442129407!2d-58.54479605714684!3d-34.52596390929933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0bebef08997%3A0xc4fdb0870c9ff855!2sCarapachay%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1621722847300!5m2!1ses!2sar"
              allowfullscreen=""
              loading="lazy"
              title="Map"
              className="mapa"
            ></iframe>
          </Col>
        </Row>
        </div>
        <Row className="text-center footer-inferior pt-3 mx-0">
          <Col xs={12}>
            <p>
              Tucson 3D<span>&#169;</span> Todos los derechos reservados.
            </p>
          </Col>
          <Col xs={12}>
            <p>
              Desarrollado por{" "}
              <a
                href="https://github.com/cmachado17"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cmachado
              </a>
              .
            </p>
          </Col>
        </Row>
      </div>

  );
};

export default Footer;
