import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'; // Asegúrate de incluir tu archivo CSS

const ClimateActionSection = () => {
  return (
    <Container fluid className="climate-action-section" id='parliaments'>
      <Row className="text-center">
        <Col xs={12}>
          <h2 className="section-title">Intercambio de Buenas Prácticas</h2>
          <p className="section-description">
          Los parlamentos son fundamentales en la promoción de la sostenibilidad y la acción climática. Tienen la responsabilidad de legislar y crear políticas que regulen el uso de recursos naturales y protejan el medio ambiente. A través de su capacidad para aprobar leyes y presupuestos, pueden impulsar iniciativas que reduzcan las emisiones de gases de efecto invernadero y promuevan la resiliencia frente al cambio climático. Además, su rol como representantes del pueblo les permite conectar las necesidades de la ciudadanía con las acciones del gobierno, asegurando que las políticas ambientales sean inclusivas y efectivas.
          </p>
        </Col>
      </Row>
      <Row className="action-steps">
        <Col md={4} className="action-step">
          <div className="step-icon">1</div>
          <h3 className="step-title">Intercambio de Buenas Prácticas</h3>
          <p className="step-description">
          Facilitamos el intercambio de buenas prácticas entre los parlamentos miembros, permitiendo que compartan experiencias exitosas en la implementación de políticas y programas sostenibles. 
          </p>
        </Col>
        <Col md={4} className="action-step">
          <div className="step-icon">2</div>
          <h3 className="step-title">Medición de Huella de Carbono Institucional</h3>
          <p className="step-description">
          REPACS implementará un programa de medición de la huella de carbono institucional, basado en la experiencia de la Cámara de Diputados. Este programa no solo evaluará y reducirá las emisiones de gases de efecto invernadero generadas por las actividades parlamentarias, sino que también servirá como ejemplo para otras instituciones legislativas.
          </p>
        </Col>
        <Col md={4} className="action-step">
          <div className="step-icon">3</div>
          <h3 className="step-title">Gobernanza Ambiental</h3>
          <p className="step-description">
          Promovemos un modelo de gobernanza ambiental que garantice la participación activa de la sociedad civil, las comunidades y otros actores en la formulación e implementación de políticas. Esta gobernanza crea un espacio inclusivo y participativo donde se abordan los desafíos ambientales de manera conjunta y efectiva.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ClimateActionSection;
