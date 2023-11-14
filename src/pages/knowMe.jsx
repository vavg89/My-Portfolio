import React from 'react';
import TransitionComponent from '../components/TransitionComponent';
import CustomCert from '../components/CustomCert';

function KnowMe() {
  return (
    <div className="container">
      <TransitionComponent duration={1200} delay={200} opacity={1} marginTop={0} AnimatedActive={false}>
        <div className='mb-6 col-8 mx-auto c-v'>
          <CustomCert/>
        </div>
       

        <div className='txtKnowmeColor text-center txtMin'>
          <h2>Victor Vanderviest</h2>
          <h3 >Full Stack Developer</h3>
          <h6 className='txtMin'>
                Soy un apasionado desarrollador Full Stack con una sólida experiencia en JavaScript, TypeScript, PHP, React, Node.js, Redux, Express, Axios.
                Mi enfoque se basa en la implementación de prácticas de desarrollo ágiles que permiten desarrollar sistemas robustos y escalables que ofrecen un rendimiento excepcional.
                Además, mi conocimiento en el desarrollo de interfaces de usuario (UI) y experiencia de usuario (UX) me permite crear productos atractivos y fáciles de usar.

                He trabajado en entornos de integración y entrega continua (CI/CD) para garantizar la eficiencia y la entrega de proyectos exitosos en plazos ajustados,
                mi experiencia en el diseño y manejo de bases de datos relacionales es fundamental para la creación de sistemas de datos eficientes y seguros.

                Si estás buscando un profesional con un enfoque en la excelencia técnica y la innovación constante, ¡has llegado al lugar adecuado!

                ¡Explora mi portafolio para descubrir qué tecnologías he aplicado y mis repositorios en Git-Hub, si tienes alguna pregunta no dudes en contactarme!
                </h6>
        </div>
      </TransitionComponent>
    </div>
  );
}

export default KnowMe;