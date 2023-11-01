import React from "react";
import './PagesStyless.css';
import { Carousel, Button } from 'react-bootstrap';

// Importa las imágenes de tus proyectos
import ProjectImage1 from '../assets/Proyectoecomerce.png';
import ProjectImage2 from '../assets/proyectopaises.png';
import ProjectImage3 from '../assets/proyectorickandmorty.png';

function Projects() {
  return (
    <div className="Background">
      <div>
       
        <Carousel className="imgP">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ProjectImage1}
              alt="Proyecto 1"
             
            />
            <Carousel.Caption>
              <h3>Proyecto 1</h3>
              <p>Descripción del proyecto 1.</p>
              <Button variant="primary" href="https://link-al-repositorio-1" target="_blank" rel="noopener noreferrer">
                Ver repositorio
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ProjectImage2}
              alt="Proyecto 2"
              
            />
            <Carousel.Caption>
              <h3>Proyecto 2</h3>
              <p>Descripción del proyecto 2.</p>
              <Button variant="primary" href="https://link-al-repositorio-2" target="_blank" rel="noopener noreferrer">
                Ver repositorio
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ProjectImage3}
              alt="Proyecto 3"
            
            />
            <Carousel.Caption>
              <h3>Proyecto 3</h3>
              <p>Descripción del proyecto 3.</p>
              <Button variant="primary" href="https://link-al-repositorio-3" target="_blank" rel="noopener noreferrer">
                Ver repositorio
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
