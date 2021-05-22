import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../styles/logo.png";

const SobreNosotros = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1>Sobre Nosotros</h1>
      </div>
      <Row className="mt-5">
        <Col md={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            deserunt quisquam aliquam vel voluptatem cumque delectus culpa
            quaerat incidunt praesentium, quo quam? Voluptate ratione ipsam ex
            nostrum maxime, repellat eaque? Recusandae eligendi cumque
            consequuntur minima in, numquam, quasi voluptate nesciunt, alias
            odit ullam adipisci suscipit veritatis quia libero ipsum provident
            sit. Delectus quod ipsum nemo praesentium quae natus tenetur sit.
            Repellendus, porro at optio doloribus inventore saepe quibusdam
            repellat. Numquam dicta optio blanditiis expedita perferendis sit
            voluptatum ex enim autem inventore in nam cum maxime impedit beatae,
            placeat accusantium laboriosam.
          </p>
        </Col>
        <Col md={6}>
          <Image src={Logo} rounded />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <Image src={Logo} rounded />
        </Col>
        <Col md={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            deserunt quisquam aliquam vel voluptatem cumque delectus culpa
            quaerat incidunt praesentium, quo quam? Voluptate ratione ipsam ex
            nostrum maxime, repellat eaque? Recusandae eligendi cumque
            consequuntur minima in, numquam, quasi voluptate nesciunt, alias
            odit ullam adipisci suscipit veritatis quia libero ipsum provident
            sit. Delectus quod ipsum nemo praesentium quae natus tenetur sit.
            Repellendus, porro at optio doloribus inventore saepe quibusdam
            repellat. Numquam dicta optio blanditiis expedita perferendis sit
            voluptatum ex enim autem inventore in nam cum maxime impedit beatae,
            placeat accusantium laboriosam.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default SobreNosotros;
