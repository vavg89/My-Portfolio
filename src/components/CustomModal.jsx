import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const CustomModal = () => {
  const [show, setShow] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSendingEnabled, setIsSendingEnabled] = useState(false);
  const [error, setError] = useState(null);



  const handleSend = () => {
    if (!senderName || !senderEmail || !message) {
      setError('Por favor complete todos los campos antes de enviar el mensaje.');
      return;
    }

    console.log(`Enviando mensaje de ${senderName} (${senderEmail}): ${message}`);
    // Aquí puedes realizar la lógica para enviar el mensaje con la información recopilada

    // Restablece los campos del modal después de enviar el mensaje
    setSenderName('');
    setSenderEmail('');
    setMessage('');
    setError(null);

    // Cierra el modal después de enviar el mensaje
    setShow(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'senderName') {
      setSenderName(value);
    } else if (name === 'senderEmail') {
      setSenderEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
    setIsSendingEnabled(senderName.length > 0 && senderEmail.length > 0 && message.length > 0);
    setError(null);
  };

  const fadeIn = useSpring({ opacity: show ? 1 : 0 });

  const styles = {
    customButton: {
      backgroundColor: "#252525",
      borderColor: "#252525",
      color: "#ffffff",
    },
  };

  return (
    <>
      <Button variant="custom" style={styles.customButton} onClick={() => setShow(true)}>
        Contactame
      </Button>

      <animated.div style={fadeIn}>
        <Modal show={show} onHide={() => setShow(false)} tabIndex="-1" aria-labelledby="exampleModalLabel" centered>
          <Modal.Header closeButton>
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
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleSend} disabled={!isSendingEnabled}>
              Enviar Mensaje
            </Button>
          </Modal.Footer>
        </Modal>
      </animated.div>
    </>
  );
};

export default CustomModal;
