import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

const CustomModal = () => {
  const [show, setShow] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [recaptchaValue, setRecaptchaValue] = useState(null);  
  const [isWordVerificationSuccessful, setIsWordVerificationSuccessful] = useState(false);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false); 

  const isValidText = (text) => /^[a-zA-Z0-9\s]*$/.test(text);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSend = async () => {
    if (!senderName || !senderEmail || !message || !isRecaptchaVerified || !recaptchaValue || isWordVerificationSuccessful){
      setError('Por favor complete todos los campos y complete el reCAPTCHA antes de enviar el mensaje.');
      return;
    }

    // Cierra el modal inmediatamente al hacer clic en "Enviar"
    setShow(false);

    try {
      // Enviar datos al microservicio utilizando Axios
      const response = await axios.post('https://us-central1-pagina-web-victor.cloudfunctions.net/app/api/enviar-correo', {
        senderName,
        senderEmail,
        message,
      });

      // Restablece los campos del modal después de enviar el mensaje
      setSenderName('');
      setSenderEmail('');
      setMessage('');
      setRecaptchaValue(null);
      setError(null);
      setIsWordVerificationSuccessful(false);
      setIsRecaptchaVerified(false);

      // Muestra un mensaje de alerta según la respuesta del servidor
      if (response.data.success) {
        alert('Mensaje enviado correctamente');
      } else {
        alert('Hubo un error al enviar el mensaje. Intente de nuevo.');
      }
    } catch (error) {
      console.error(error);
      setError('Error al enviar el mensaje');
      // Puedes mostrar una alerta de error si ocurre un problema inesperado
      alert('Hubo un error inesperado. Intente de nuevo.');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'senderName' && isValidText(value)) {
      setSenderName(value);
    } else if (name === 'senderEmail' && isValidEmail) {
      setSenderEmail(value);
    } 
    else if (name === 'message' && isValidText(value)) {
      setMessage(value);
    }
  
    setError(null);
  };

  const handleRecaptchaChange = (value) => {
    // Mostrar el modal de verificación de palabra al seleccionar la casilla de verificación del ReCAPTCHA
    if (value) {
      setIsRecaptchaVerified(true); // Indica que la casilla de ReCAPTCHA se ha verificado
      setRecaptchaValue(value); // Actualiza el valor de recaptchaValue
    }
  };


  const fadeIn = useSpring({ opacity: show ? 1 : 0 });

  const styles = {
    customButton: {
      backgroundColor: "#252525",
      borderColor: "#252525",
      color: "#ffffff",
    },
    customButtonText: {
      color: "#ffffff",
    },
  };


  return (
    <>
      <Button variant="dark" style={styles.customButton} onClick={() => setShow(true)}>
        <span className='nav-link' style={styles.customButtonText}>Contactame</span>
      </Button>

      <animated.div style={fadeIn}>
        <Modal show={show} onHide={() => setShow(false)} tabIndex="-1" aria-labelledby="exampleModalLabel" centered>
          <Modal.Header closeButton onClick={() => {
            setShow(false);
            setSenderName('');
            setSenderEmail('');
            setMessage('');
            setRecaptchaValue(null);
            setError(null);           
            setIsWordVerificationSuccessful(false);
            setIsRecaptchaVerified(false);
          }}>
            <Modal.Title className="fs-5">Nuevo Mensaje</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              <Form.Group className="mb-3" controlId="formSenderName">
                <Form.Label>Nombre del Remitente</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="senderName"
                  value={senderName}
                  onChange={handleInputChange}
                  isInvalid={error && !senderName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSenderEmail">
                <Form.Label>Correo del Remitente</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo"
                  name="senderEmail"
                  value={senderEmail}
                  onChange={handleInputChange}
                  isInvalid={error && !senderEmail}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Escriba su mensaje aquí"
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                  isInvalid={error && !message}
                />
              </Form.Group>

             
                <Form.Group className="mb-3"  controlId="formRecaptcha">
                  <ReCAPTCHA
                  className="mb-3 w-100"
                    sitekey="6LdpbRMpAAAAAI4hnX_HtHh_VlNIjYj2eOLsOvPc"
                    onChange={handleRecaptchaChange}
                  />
                </Form.Group>
             
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary " onClick={() => {
              setShow(false);
              setSenderName('');
              setSenderEmail('');
              setMessage('');
              setRecaptchaValue(null);
              setError(null);             
              setIsWordVerificationSuccessful(false);
              setIsRecaptchaVerified(false);
            }}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleSend} >
              Enviar Mensaje
            </Button>
          </Modal.Footer>
        </Modal>
      </animated.div>     
    </>
  );
};

export default CustomModal;
