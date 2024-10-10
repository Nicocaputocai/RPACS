import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../App.css';

const ContactForm = () => {
  
  const [validated, setValidated] = useState(false);
  const [buttonText, setButtonText] = useState('Enviar');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      sendEmail(event);
    }

    setValidated(true);
  };

  const sendEmail = (event) => {
    event.preventDefault();

   
    // Aquí debes reemplazar estos valores por los obtenidos de EmailJS
    const serviceId = import.meta.env.VITE_SERVICEID;
    const templateId = import.meta.env.VITE_TEMPLATEID;
    const publicKey = import.meta.env.VITE_PUBLICKEY;

    emailjs.sendForm(serviceId, templateId, event.target, publicKey)
      .then((result) => {
        console.log(result.text);
        setButtonText('Correo enviado');
        setEmailSent(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-form-container" id='contact'>
      <h2>Contáctanos</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="validationCustom01" className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" name="email" placeholder="name@example.com" required />
        </Form.Group>

        <Form.Group controlId="validationCustom02" className="mb-3">
          <Form.Label>Consulta</Form.Label>
          <Form.Control as="textarea" name="message" rows={3} required />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={emailSent}>
          {buttonText}
        </Button>
      </Form>
    </div>
  );
};


export default ContactForm;
