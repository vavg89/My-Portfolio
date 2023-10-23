import React from "react";
import './PagesStyless.css';
import imagen from '../assets/Yo.png';
import BottonsTransition from "../components/BottonsTransition";

function KnowMe() {
    return (
        <div className="BackgroundBlack">
            <BottonsTransition/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={imagen} className="img-fluid" alt="Victor Vanderviest" />
                    </div>
                    <div className="col-md-6 text-container">
                        <h2>Victor Vanderviest</h2>
                        <h3>Full Stack Developer</h3>
                        <p className="fade-in">
                            ¡Bienvenido a mi portafolio! Siéntete libre de explorar y conocer las tecnologías que he adoptado durante mis más de 6 años de desarrollo profesional. Desde una edad temprana, desperté un apasionado interés por la tecnología. Aunque la vida me llevó por el camino de la administración, me permitió adquirir habilidades que luego apliqué en el desarrollo web.

                            Comencé mi experiencia como analista QA en el año 2017. En 2021, logré mi primer empleo como desarrollador gracias a un excelente grupo que me brindó la oportunidad en Insucomp Venezuela. Actualmente, sigo formando parte de su equipo de desarrollo de manera remota desde Argentina. Participé en el bootcamp de Soy Henry, un instituto exigente que me desafió constantemente. Allí, adquirí conocimientos en excelentes tecnologías y fortalecí mis habilidades como programador web. Aun sigo en la búsqueda de adquirir nuevos conocimientos y habilidades, ya que considero que tengo un pensamiento crítico y por ende busco mantenerme a la vanguardia de la tecnología para poder aplicar las mejores técnicas a mis proyectos y actividades. Me integro fácilmente con mi equipo de trabajo y colaboro en todo lo posible con mis compañeros. Mantengo siempre una comunicación fluida con el equipo. Soy una persona comprometida y respeto los plazos de entrega de mis actividades. ¡Sigue explorando mi portafolio y no dudes en contactarme si tienes alguna duda!

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KnowMe;
