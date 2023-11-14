import React, { useState } from "react";
import './PagesStyless.css';
import { Carousel, Button } from 'react-bootstrap';
import ProjectImage1 from '../assets/Proyectoecomerce.png';
import ProjectImage2 from '../assets/proyectopaises.png';
import ProjectImage3 from '../assets/proyectorickandmorty.png';

function Projects() {
  const [projectInfo, setProjectInfo] = useState({
    title: 'Modelo de E-Commerce',    
    repositoryLink: 'https://github.com/vavg89/E-commerce-demo'
  });

  const handleCarouselSelect = (selectedIndex) => {
    if (selectedIndex === 0) {
      setProjectInfo({
        title: 'Modelo de E-Commerce',
        repositoryLink: 'https://github.com/CristianSombra/PF_Grupal/tree/main'
      });
    } else if (selectedIndex === 1) {
      setProjectInfo({
        title: 'Paises y actividades',
        repositoryLink: 'https://github.com/vavg89/PICountries-henry'
      });
    } else if (selectedIndex === 2) {
      setProjectInfo({
        title: 'Rick and morty API-henry',
        repositoryLink: 'https://github.com/vavg89/rick_and_morty'
      });
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="title mb-3 text-center">Repositorios</h1>
        <h1 className="title2 mb-3 text-center">{projectInfo.title}</h1>
        <p>{projectInfo.description}</p>
        <Carousel className="imgP dark" style={{ fill: "#4169E1" }} onSelect={handleCarouselSelect}>
          
          <Carousel.Item>
            <img
             
              className="d-block w-100 "
              src={ProjectImage1}
              alt="Proyecto 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ProjectImage2}
              alt="Proyecto 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ProjectImage3}
              alt="Proyecto 3"
            />
          </Carousel.Item>
        </Carousel>
        <div className="d-flex justify-content-center ">
          <Button  variant="primary" href={projectInfo.repositoryLink} target="_blank" rel="noopener noreferrer">
            Ver Repositorio
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
