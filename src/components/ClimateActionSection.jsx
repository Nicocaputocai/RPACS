import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css"; // Asegúrate de incluir tu archivo CSS

const ClimateActionSection = () => {
  return (
    <section>
      <Container fluid >
        <Row className="text-center">
          <Col xs={12}>
          <br />
            <h2 className="section-title">Proyectos y Acciones</h2>
          </Col>
        </Row>

        <Row className="action-steps">
          <Col md={3} className="action-step">
            <div className="step-icon">1</div>
            <h3 className="step-title">Capacitación y Formación</h3>
            <p className="step-description">
            Desarrollamos programas de capacitación dirigidos a legisladores y funcionarios públicos para comprender los problemas socio ambinetales. Un componente central de estas capacitaciones es la Ley Yolanda, que establece la obligación de formar a los funcionarios en educación ambiental y sostenibilidad. Esta ley es esencial para fortalecer las capacidades de quienes toman decisiones en el ámbito público, asegurando que implementen políticas efectivas para enfrentar los desafíos climáticos y promover el desarrollo sostenible.
            </p>
          </Col>

          <Col md={3} className="action-step">
            <div className="step-icon">2
            </div>
            <h3 className="step-title">Medición de Huella de Carbono Institucional</h3>
            <p className="step-description">
            REPACS implementará un programa de medición de la huella de carbono institucional, basado en la experiencia de la Cámara de Diputados. Este programa no solo evaluará y reducirá las emisiones de gases de efecto invernadero generadas por las actividades parlamentarias, sino que también servirá como ejemplo para otras instituciones legislativas.
            </p>
          </Col>
          
          <Col md={3} className="action-step">
            <div className="step-icon">3</div>
            <h3 className="step-title">
            Diplomacia Parlamentaria            
            </h3>
            <p className="step-description">
            Fomentamos la diplomacia parlamentaria, participando en foros internacionales y cooperaciones donde los poderes legislativos pueden intercambiar experiencias y mejores prácticas. Estas plataformas son esenciales para fortalecer la colaboración global en la lucha contra el cambio climático y promover un enfoque conjunto hacia el desarrollo sostenible.
            </p>
          </Col>

          <Col md={5} className="action-step">
            <div className="step-icon">4</div>
            <h3 className="step-title">
            Los parlamentos y la agenda climática            
            </h3>
            <p className="step-description">
            Facilitamos el intercambio de buenas prácticas entre los parlamentos miembros, permitiendo que compartan experiencias exitosas en la implementación de políticas y programas sostenibles. 
            </p>
          </Col>

          <Col md={5} className="action-step">
            <div className="step-icon">5</div>
            <h3 className="step-title">
            Estrategias Legislativas
            </h3>
            <p id="antecedentes" className="step-description">
            Colaboramos creación y evaluación de un marco normativo que promueva la sostenibilidad y la acción climática. 
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClimateActionSection;
