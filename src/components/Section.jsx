import React from 'react';
import '../App.css';
import { Container } from 'react-bootstrap';

const ObjectivesSection = () => {
  return (
  <Container fluid className="objectives-container">
    <h2 style={{position:"absolute",textAlign: "center", alignContent:"center"}}>Objetivos</h2>
    <div className="objectives-container">
      
      <div className="objective-card">
        <h3>Diplomacia Parlamentaria</h3>
        <p>Facilitamos el diálogo y la colaboración entre parlamentos para abordar los desafíos del cambio climático de manera conjunta.</p>
      </div>
      <div className="objective-card">
        <h3>Intercambio de Conocimientos</h3>
        <p>Organizamos talleres y diálogos para compartir prácticas efectivas de mitigación y adaptación al cambio climático.</p>
      </div>
      <div className="objective-card">
        <h3>Políticas Innovadoras</h3>
        <p>Apoyamos el desarrollo de políticas públicas que incorporen tecnologías sostenibles y enfoques innovadores.</p>
      </div>
    </div>
</Container>
  );
};

export default ObjectivesSection;
