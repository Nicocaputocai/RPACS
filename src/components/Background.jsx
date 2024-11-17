import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const Antecedentes = () => {
  return (
    <section className="antecedentes">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Antecedentes</h2>
            <p className="section-subtitle">
            La experiencia adquirida en la Honorable Cámara de Diputados de la Nación (HCDN) a través de la Dirección General de Ambiente y Desarrollo Sostenible ha sido clave en la formulación de la Red Parlamentaria para la Acción Climática y la Sostenibilidad (REPACS). Con un equipo especializado, se implementaron iniciativas como la Ley Yolanda, que capacitó a legisladores y funcionarios en temas de sostenibilidad, y el Programa Parlamento Sostenible, que incluyó la medición de la huella de carbono institucional, el diseño de un Manual de Buenas Prácticas Ambientales y la declaración de una política ambiental para la Cámara. <br /> <br />
Además, se elaboró un informe exhaustivo sobre la alineación de la legislación nacional con los Objetivos de Desarrollo Sostenible (ODS), lo que fortaleció el compromiso de la HCDN con la Agenda 2030.  <br /> <br />
Estas acciones demuestran cómo los parlamentos pueden asumir un papel activo en la acción climática y la sostenibilidad, y REPACS busca expandir estos logros a nivel regional, promoviendo un modelo de gobernanza ambiental en otros parlamentos.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Antecedentes;
