import React from 'react';
import '../App.css';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
const Banner = () => {
  return (
    <Container fluid className="hero-container">
      <div className="hero-overlay"></div> {/* Capa de sombreado */}
      <Row className="justify-content-center text-center hero-content">
        <Col sm="6" className="d-flex justify-content-center mb-4">
          <h1>Red de Parlamentos para la Acción Climática</h1>
        </Col>
        <Col sm="12">
          <p>Intercambio de conocimientos entre legisladores, academia, sector privado y sociedad civil para prácticas efectivas en cambio climático.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
