import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Contáctanos</h2>
      <form>
        <input type="text" placeholder="Nombre Completo" />
        <input type="email" placeholder="Correo Electrónico" />
        <select>
          <option value="">Seleccionar País</option>
          <option value="Argentina">Argentina</option>
          <option value="Chile">Chile</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
