import React from "react";
import './PagesStyless.css';
import imagen from '../assets/Yo.png';
import TransitionComponent from '../components/TransitionComponent';


function KnowMe() {
    return (
       
        <div className= "Background container-fluid">
           
            <TransitionComponent duration={1200} delay={200} opacity={1} marginTop={0} AnimatedActive={false}>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={imagen} className="img-fluid" alt="Victor Vanderviest" />
                    </div>
                    <div className="text-container">
                        <h2>Victor Vanderviest</h2>
                        <h3>Full Stack Developer</h3>
                        <p >
                        Soy un apasionado desarrollador Full Stack con una sólida experiencia en tecnologías como Redux, JavaScript, Node.js y Express, entre otros . Mi enfoque se basa en la implementación de prácticas de desarrollo ágiles  que permiten desarrollar sistemas robustos y escalables que ofrecen un rendimiento excepcional. Además, mi conocimiento en el desarrollo de interfaces de usuario (UI) y experiencia de usuario (UX) me permite crear productos atractivos y fáciles de usar.

                        He trabajado en entornos de integración y entrega continua (CI/CD) para garantizar la eficiencia y la calidad del código. Mi familiaridad con metodologías ágiles ha demostrado ser fundamental para la entrega de proyectos exitosos en plazos ajustados, y mi experiencia en el diseño y manejo de bases de datos relacionales ha sido fundamental para la creación de sistemas de datos eficientes y seguros.

                        Si estás buscando un profesional con un enfoque en la excelencia técnica y la innovación constante, ¡has llegado al lugar adecuado!

                        ¡Explora mi portafolio para descubrir más sobre mis proyectos y habilidades!

                        </p>
                    </div>
                </div>
            </div>
            </TransitionComponent>
            
            

        </div>
        
    );
}

export default KnowMe;
