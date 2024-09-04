import React from "react";
import { Col, Image } from "react-bootstrap";
import "../assets/style/collections.css"; // Asegúrate de ajustar la ruta según tu estructura

const Collectionitem = ({ img, text }) => {
  return (
    <Col lg={6} md={6} sm={12} xs={12} className="g-4 d-flex justify-content-center">
      <div className="collection-item">
        <div className="image-wrapper">
          <Image src={img} fluid className="image" />
          <div className="overlay">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Collectionitem;