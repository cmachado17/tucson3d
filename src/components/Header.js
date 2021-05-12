import React from "react";
import Image from "react-bootstrap/Image";
import Logo from "../styles/logo.png";
import Row from "react-bootstrap/Row";

const Header = () => {
  return (
    <Row className="header">
      <Image src={Logo} fluid className="h-100  mx-auto"/>
    </Row>
  );
};

export default Header;
