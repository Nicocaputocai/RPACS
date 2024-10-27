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
        <p>Desarrollamos programas de capacitación dirigidos a legisladores y funcionarios públicos para comprender los problemas socio ambinetales. Un componente central de estas capacitaciones es la Ley Yolanda, que establece la obligación de formar a los funcionarios en educación ambiental y sostenibilidad. Esta ley es esencial para fortalecer las capacidades de quienes toman decisiones en el ámbito público, asegurando que implementen políticas efectivas para enfrentar los desafíos climáticos y promover el desarrollo sostenible.</p>
      </div>
      <div className="objective-card">
        <h3>Estrategias Legislativas</h3>
        <p>Colaboramos creación y evaluación de un marco normativo que promueva la sostenibilidad y la acción climática. </p>
      </div>
      <div className="objective-card">
        <h3>Diplomacia Parlamentaria</h3>
        <p>Fomentamos la diplomacia parlamentaria, participando en foros internacionales y cooperaciones donde los poderes legislativos pueden intercambiar experiencias y mejores prácticas. Estas plataformas son esenciales para fortalecer la colaboración global en la lucha contra el cambio climático y promover un enfoque conjunto hacia el desarrollo sostenible.</p>
      </div>
    </div>
</Container>
  );
};

export default ObjectivesSection;
