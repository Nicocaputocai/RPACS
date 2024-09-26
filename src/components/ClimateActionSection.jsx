import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'; // Asegúrate de incluir tu archivo CSS

const ClimateActionSection = () => {
  return (
    <Container fluid className="climate-action-section">
      <Row className="text-center">
        <Col xs={12}>
          <h2 className="section-title">El Rol de los Parlamentos Frente a la Crisis Climática</h2>
          <p className="section-description">
            Los parlamentos son fundamentales en la respuesta al cambio climático, ya que tienen la responsabilidad de promover políticas públicas que aborden este desafío de manera integral. El Acuerdo de París establece metas ambiciosas para limitar el aumento de la temperatura global, y nuestro país ha ratificado este compromiso.
          </p>
        </Col>
      </Row>
      <Row className="action-steps">
        <Col md={4} className="action-step">
          <div className="step-icon">1</div>
          <h3 className="step-title">¿Qué es la Medición de Huella de Carbono?</h3>
          <p className="step-description">
            La medición de la Huella de Carbono es esencial para evaluar el impacto ambiental de las actividades institucionales. Permite identificar áreas de mejora y diseñar estrategias efectivas para la reducción de emisiones de gases de efecto invernadero (GEI).
          </p>
        </Col>
        <Col md={4} className="action-step">
          <div className="step-icon">2</div>
          <h3 className="step-title">Plan de Acción</h3>
          <p className="step-description">
            Proponemos un plan de acción climático basado en tres etapas: Inventario de CO2, Plan de Acción Climático, y Evaluación y Mejora Continua.
          </p>
        </Col>
        <Col md={4} className="action-step">
          <div className="step-icon">3</div>
          <h3 className="step-title">Ventajas de Medir la Huella de Carbono</h3>
          <p className="step-description">
            Medir la huella de carbono y reducir emisiones contribuye a un mejor posicionamiento internacional, transparencia, eficiencia energética y resiliencia institucional.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ClimateActionSection;
