import React from 'react';
import '../App.css';
import { Col, Container, Image, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Logo from "../assets/RPACS_COLOR PNG.png";
import LogoBlanco from "../assets/RPACS_PNG_Blanco.png"

const Header = () => {
  return (
    <Container fluid className="hero-container">
      <div className="hero-overlay" id='home'></div> {/* Capa de sombreado */}
      <Row className="justify-content-center text-center hero-content">
        <Col sm="4" className="d-flex justify-content-center mb-4">
         <Image src={Logo} fluid style={{marginRight:"12px"}}/>
         {/* <Image src={LogoBlanco} style={{marginTop:"-200px"}} fluid /> */}
        </Col>

        {/* <Col sm="12" style={{marginTop:"-200px"}}>
          <p>Intercambio de conocimientos entre legisladores, academia, sector privado y sociedad civil para prácticas efectivas en cambio climático.</p>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Header;
