import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../pages/PagesStyless.css';
import { Modal, Button, Carousel } from 'react-bootstrap';
import CertificadosImg from '../assets/Certificados.png';
import CerHenry from "../assets/soyhenrycer.jpg";
import CerDB from "../assets/BasededatosUdemy.jpg";
import CerTest from "../assets/TestingUdemy.jpg"

const CustomCertModal = () => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line
  const [hovered, setHovered] = useState(false);

  const springProps = useSpring({
    to: async next => {
      while (true) {
        await next({ transform: 'scale(0.2)' });
        await next({ transform: 'scale(0.25)' });
      }
    },
    from: { transform: 'scale(1)' },
  });

  const certificates = [
    { id: 1, imgSrc: CerHenry, linkUrl: 'enlace_1' },
    { id: 2, imgSrc: CerDB, linkUrl: 'enlace_2' },
    { id: 3, imgSrc: CerTest, linkUrl: 'enlace_2' },
  ];

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    
  };

  return (
    <>
      <animated.img 
        src={CertificadosImg} 
        className="imgCer" 
        alt="Botón de Certificados" 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleOpenModal}
        style={{ cursor: 'pointer', ...springProps }} 
      />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Certificados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {certificates.map((certificate) => (
              <Carousel.Item key={certificate.id}>
                <img
                  className="d-block w-100"
                  src={certificate.imgSrc}
                  alt={`Certificado ${certificate.id}`}
                />
                <Carousel.Caption>
                  <Button variant="primary" href={certificate.linkUrl} target="_blank" rel="noopener noreferrer">
                    Ver certificado
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomCertModal;
