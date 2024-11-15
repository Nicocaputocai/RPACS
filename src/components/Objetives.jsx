import React from 'react';
import '../App.css';
import { Container } from 'react-bootstrap';
import carbon1 from "../assets/image/carbon1.jpg"

const ObjectivesSection = () => {
  return (
  <Container fluid className="objectives-container">
    
    <h2 style={{position:"absolute",textAlign: "center", alignContent:"center"}}>Objetivos</h2>
    <div className="objectives-container">
      
      <div className="objective-card">
        <h3>Capacitación y Formación</h3>
        <p>Desarrollamos programas de capacitación dirigidos a legisladores y funcionarios públicos para comprender los problemas socio ambinetales.</p>
      </div>
      <div className="objective-card">
        <h3>Estrategias <br /> Legislativas</h3>
        <p>Colaboramos creación y evaluación de un marco normativo que promueva la sostenibilidad y la acción climática. </p>
      </div>
      <div className="objective-card">
        <h3>Diplomacia Parlamentaria</h3>
        <p>Fomentamos la diplomacia parlamentaria, participando en foros internacionales y cooperaciones donde los poderes legislativos pueden intercambiar experiencias y mejores prácticas.</p>
      </div>
    </div>
</Container>
  );
};

export default ObjectivesSection;
