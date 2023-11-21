import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import CerHenry from "../assets/soyhenrycer.jpg";
import CerDB from "../assets/BasededatosUdemy.jpg";
import CerTest from "../assets/TestingUdemy.jpg"

const CustomCert = () => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0); 

  const certificates = [
    { id: 1, imgSrc: CerHenry, linkUrl: 'https://certificates.soyhenry.com/new-cert?id=d6fd5604f4f00d04db10391bbbf5b624a7f15ffe9af8301007d039eb89ca05d7' },
    { id: 2, imgSrc: CerDB, linkUrl: 'https://www.udemy.com/certificate/UC-9e2bb22a-6e8e-4bb7-9d86-23703b3f9a52' },
    { id: 3, imgSrc: CerTest, linkUrl: 'https://www.udemy.com/certificate/UC-3c46ce1a-6296-436e-a338-44f48974a960' },
  ];


  return (
    
   <div>
     <Carousel 
            interval={2000} 
            prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />} 
            nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />}
            onSelect={(selectedIndex, e) => setCurrentCertIndex(selectedIndex)}
          >
            {certificates.map((certificate, index) => (
              <Carousel.Item key={certificate.id}>
                <img
                  className="d-block w-100 img-fluid"
                  src={certificate.imgSrc}
                  alt={`Certificado ${certificate.id}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="text-center mt-1">
            <Button 
              variant="primary" 
              href={certificates[currentCertIndex].linkUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mx-2 btn-sm"
            >
              Ver certificado
            </Button>
          </div>
       
   </div>
        
   
  );
};

export default CustomCert;