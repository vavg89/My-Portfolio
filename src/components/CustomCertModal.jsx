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
    { id: 1, imgSrc: CerHenry, linkUrl: 'https://certificates.soyhenry.com/new-cert?id=d6fd5604f4f00d04db10391bbbf5b624a7f15ffe9af8301007d039eb89ca05d7' },
    { id: 2, imgSrc: CerDB, linkUrl: 'https://www.udemy.com/certificate/UC-9e2bb22a-6e8e-4bb7-9d86-23703b3f9a52' },
    { id: 3, imgSrc: CerTest, linkUrl: 'https://www.udemy.com/certificate/UC-3c46ce1a-6296-436e-a338-44f48974a960' },
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

      <Modal show={showModal} onHide={handleCloseModal} tabIndex="-1" aria-labelledby="exampleModalLabel" centered>
        <Modal.Header closeButton>
          <Modal.Title>Certificados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel interval={2000} prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />} nextIcon={<span className="carousel-control-next-icon" aria-hidden="true"   />}>
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
