import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import Logo from '../assets/ISO_PNG_Color.png'; // Asegúrate de que la ruta sea correcta
import '../App.css';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" sticky='top' style={{backgroundColor:"white"}}>
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
        <Image
          fluid
            src={Logo}
            width="80 vw"
            height="70vh"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <span className="logo-text">RPACS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#mission" className="nav-link">Misión</Nav.Link>
            <Nav.Link href="#objectives" className="nav-link">Objetivos</Nav.Link>
            <Nav.Link href="#acciones" className="nav-link">Proyectos y Acciones</Nav.Link>
            <Nav.Link href="#parliaments" className="nav-link">Parlamento Sostenible</Nav.Link>
            <Nav.Link href='#antecedentes' className="nav-link">Antecedentes</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contacto</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
