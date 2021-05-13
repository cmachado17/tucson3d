import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Galeria1 from "../styles/FotoGaleria1.jpeg";
import Galeria2 from "../styles/FotoGaleria2.jpeg";
import Galeria3 from "../styles/FotoGaleria3.jpeg";

const GaleriaImagenes = () => {
  return (
    <Carousel fade className="galeria-imagenes">
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Galeria1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Galeria2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Galeria3}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default GaleriaImagenes;
