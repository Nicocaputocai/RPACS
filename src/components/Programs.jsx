import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';
import huella from '../assets/image/huella.jpg'; // Ícono de Inventario
import co2 from '../assets/image/co2.jpg'; // Ícono de Reducción
import balanza from '../assets/image/balanza.jpg'; // Ícono de Evaluación

const ProgramaSostenible = () => {
  return (
    <section className="programa-sostenible">
      <Container className="programa-sostenible" >
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Programa "Parlamento Sostenible"</h2>
            <p className="section-subtitle">
            Implementación de un Plan de Acción Climático en tres etapas:
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
        <Col xs="12" md="4">
              <Image src={huella} fluid style={{width:"15vw"}}></Image>
            </Col>
            <Col xs="12" md="7">
              <p
                className="main-text gris"
                style={{
                  fontSize: "1.1rem",
                  paddingTop: "6vh",
                  textAlign: "justify",
                }}
              >
                <h2 className="verdeIntermedio">Reducción de Huella de Carbono: </h2> <hr />
                Planificación para optimizar el consumo de recursos (energía, agua, residuos).
              </p>
            </Col>
        </Row>

        <Row>
          <Col>
            <br /> <br />
            <p
                className="main-text gris"
                style={{
                  fontSize: "1.1rem",
                  paddingTop: "3vh",
                  textAlign: "justify",
                }} >
              <h2 className="verdeIntermedio">Inventario de CO2: </h2> <hr />
              Realización de un inventario de emisiones de gases de efecto invernadero (GEI).
            </p>
          </Col>
          <Col xs="12" md="4">
            <Image fluid src={co2}  style={{width:"15vw"}} />
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="4">
            <Image fluid src={balanza}  style={{width:"15vw"}}/>
          </Col>

          <Col xs="12" md="8">
          <p
                className="main-text gris"
                style={{
                  fontSize: "1.1rem",
                  paddingTop: "6vh",
                  textAlign: "justify",
                }} >
              <h3>Evaluación y Mejora Continua:</h3>
              <hr /> Monitoreo y ajuste de las acciones implementadas para maximizar los resultados y asegurar un proceso de mejora continua a partir de la elaboración de un plan de acción climático.
            </p>
          </Col>
        </Row>


        <Row className="text-center mt-4">
          <Col id="parliaments">
            <button className="btn btn-primary">Conoce más sobre el programa</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProgramaSostenible;
