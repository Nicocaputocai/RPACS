import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Modal,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import img from "../assets/image/RPACS_COLOR PNG.png";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [showModal2, setShowModal2] = useState(false);

  const handleClose2 = () => setShowModal2(false);
  const handleShow2 = () => setShowModal2(true);

  return (
    <Container className="py-5">
      <Row>
        <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
          <div className="text-lg-start text-md-start text-center">
            <h1 className="font-primary color-primary fs-22">
              Red de Parlamentos para la Acción Climática y la Sostenibilidad
            </h1>
            <p className="font-secondary color-fourth py-3 fs-16">
              Promovemos la cooperación entre los parlamentos argentinos para el
              desarrollo e implementación de políticas innovadoras destinadas a
              combatir el cambio climático y alcanzar el desarrollo sostenible.
            </p>
          </div>
        </Col>
        <Col lg={6} md={6} className="d-none d-lg-block">
          <Image src={img} fluid style={{height:"80%"}} />
        </Col>
      </Row>

      <Row>
      <Col lg={8} md={8} sm={12} className="d-flex align-items-center">
        <div className="text-lg-start text-md-start text-center">
          <p className="font-secondary color-fourth py-3 fs-14">
            Nuestra <b>misión</b> es fortalecer la cooperación entre los
            parlamentos y las agencias gubernamentales en el desarrollo e
            implementación de políticas innovadoras destinadas a combatir el
            cambio climático, promoviendo un intercambio efectivo de
            conocimientos y prácticas entre parlamentarias y parlamentarios,
            expertas y expertos, la sociedad civil y otras partes interesadas.
          </p>
        </div>
      </Col>
      <Col>
        <div>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">Objetivos</Tooltip>}
          >
            {({ ref2, ...triggerHandler }) => (
              <Button
                variant="outline-primary"
                style={{ margin:"15%"}}
                onClick={handleShow}
                size="lg"
                {...triggerHandler}
                className="d-inline-flex align-items-center"
              >
                <i
                  ref={ref2}
                  className="bi bi-list-check"
                  style={{ fontSize: '3rem' }}
                />
                <span className="ms-1"></span>
              </Button>
            )}
          </OverlayTrigger>
        </div>
        <br />
      </Col>
    </Row>

      <Row>
        <Col lg={8} md={8} sm={12} className="d-flex align-items-center">
        <div className="text-lg-start text-md-start text-center">
          <p className="font-secondary color-fourth py-3 fs-14">
           El trabajo de la RPACS promueve la cooperación entre los parlamentos argentinos para el desarrollo e implementación de políticas innovadoras destinadas a combatir el cambio climático y alcanzar el desarrollo sostenible.
          </p>
        </div>
      </Col>
      <Col lg={4} md={4} sm={12}>
        <div>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">Huella de Carbono</Tooltip>}
          >
            {({ ref, ...triggerHandler2 }) => (
              <Button
                style={{ margin:"15%"}}
                variant="outline-primary"
                onClick={handleShow2}
                size="lg"
                {...triggerHandler2}
                className="d-inline-flex align-items-center"
              >
                <i
                  ref={ref}
                  className="bi bi-fingerprint"
                  style={{ fontSize: '3rem' }}
                />
                <span className="ms-1"></span>
              </Button>
            )}
          </OverlayTrigger>
        </div>
        <br />
      </Col>
    </Row>
    {/* Modals */}
      <Col lg={12} md={12} sm={12}>
        <Modal show={showModal} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Objetivos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <i class="bi bi-check-lg"></i> Fomentar la Diplomacia Parlamentaria:
            Facilitar el diálogo y la colaboración entre parlamentos de
            diferentes regiones para abordar de manera conjunta los desafíos del
            cambio climático. <br />
            <i class="bi bi-check-lg"></i> Promover el Intercambio de
            Conocimientos: Organizar talleres, diálogos y crear recursos
            especializados para compartir prácticas efectivas de mitigación y
            adaptación al cambio climático.
            <br />
            <i class="bi bi-check-lg"></i> Monitorizar y Evaluar: Implementar
            mecanismos de seguimiento y evaluación para asegurar la efectividad
            de las políticas y acciones implementadas.
            <br />
            <i class="bi bi-check-lg"></i> Sensibilizar y Educar: Concienciar a
            la sociedad y a los responsables políticos sobre la importancia de
            adoptar medidas sostenibles y urgentes para enfrentar el cambio
            climático.
            <br />
            <i class="bi bi-check-lg"></i> El Rol de los Parlamentos Frente a la
            Crisis Climática
            <br />
            <i class="bi bi-check-lg"></i> Los parlamentos son fundamentales en
            la respuesta al cambio climático, ya que tienen la responsabilidad
            de promover políticas públicas que aborden este desafío de manera
            integral. El Acuerdo de París establece metas ambiciosas para
            limitar el aumento de la temperatura global, y nuestro país ha
            ratificado este compromiso. <br />
            <i class="bi bi-check-lg"></i> El Acuerdo de París establece metas
            ambiciosas para limitar el aumento de la temperatura global, y
            nuestro país ha ratificado este compromiso.
          </Modal.Body>
        </Modal>
      </Col>
      <Col lg={12} md={12} sm={12}>
        <br />
        {/* Huella de carbono */}
        <Modal show={showModal2} onHide={handleClose2} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              ¿Qué es la Medición de Huella de Carbono?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            La medición de la Huella de Carbono es esencial para evaluar el
            impacto ambiental de las actividades institucionales. Permite
            identificar áreas de mejora y diseñar estrategias efectivas para la
            reducción de emisiones de gases de efecto invernadero (GEI).
            Cuantificar estas emisiones permitirá establecer metas claras para
            reducir el impacto ambiental de los parlamentos y contribuir a los
            compromisos nacionales e internacionales en la lucha contra el
            cambio climático.
          </Modal.Body>
        </Modal>
      </Col>
    </Container>
  );
}
