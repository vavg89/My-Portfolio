import React from 'react';
import TransitionComponent from '../components/TransitionComponent';
import CustomCert from '../components/CustomCert';

function KnowMe() {
  return (
    <div className="container">
      <TransitionComponent duration={1200} delay={200} opacity={1} marginTop={0} AnimatedActive={false}>
        <div className='mb-6 col-8 mx-auto '>
          <CustomCert/>
        </div>
        <hr/>
       

        <div className='txtKnowmeColor text-center  font-family-serif'>
          <h2 className='font-family-serif txtMin'>Victor Vanderviest</h2>
          <h3 className='txtMin'>Full Stack Developer</h3>
          <h6 className='txtMin'>
          <hr/>
          "Soy un apasionado desarrollador Full Stack con experiencia en lenguajes como JavaScript, PHP, React, Node.js, Vue.js, Vuex, Pinia, Redux, 
          Express y Axios. He participado en marcos de desarrollo ágiles como Scrum, junto a entornos de integración y entrega continua (CI/CD), integrado a 
          plataformas como GitHub, firebase y herramientas de automatización de pruebas como Jenkins.     
          Participo en el mantenimiento, mejora y resolución de problemas en las interfaces de usuario (UI) y experiencia de usuario (UX), microservicios, 
          gestión y desarrollo de APIs REST y bases de datos relacionales.
           <hr/>
           Si estás buscando un profesional con enfoque en la excelencia técnica y la innovación constante, ¡has llegado al lugar adecuado!"
          ¡Explora mi portafolio para descubrir qué tecnologías he aplicado y mis repositorios en Git-Hub, si tienes alguna pregunta no dudes en contactarme!
          </h6>
        </div>
      </TransitionComponent>
    </div>
  );
}

export default KnowMe;