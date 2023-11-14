import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import KnowMe from '../pages/knowMe';
import Technologies from '../pages/technologies';
import BottonsTransition from '../components/BottonsTransition';
import SideButton from '../components/SideButton';
import Projects from './projects';
import CustomModal from '../components/CustomModal';
import "../pages/PagesStyless.css";
import cloud from "../assets/nube.png";
import satelite from "../assets/satelite.png";
import tecnologia from "../assets/tecnologia.png";
import proyectos from "../assets/proyectos.png";

export default function ParallaxPages() {
  const parallax = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);


  const handlePageChange = (page) => {
    setCurrentPage(page);
    parallax.current.scrollTo(page);
  };

  
  return (
    <div >
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top justify-content-center">
    <ul className="nav">
      <li className={currentPage === 0 ? 'nav-item active' : 'nav-item'}>
        <a className={currentPage === 0 ? 'nav-link active' : 'nav-link'} href="#knowMe" onClick={() => handlePageChange(0)}>
          Conóceme
        </a>
      </li>
      <li className={currentPage === 1 ? 'nav-item active' : 'nav-item'}>
        <a className={currentPage === 1 ? 'nav-link active' : 'nav-link'} href="#technologies" onClick={() => handlePageChange(1)}>
          Tecnologías
        </a>
      </li>
      <li className={currentPage === 2 ? 'nav-item active' : 'nav-item'}>
        <a className={currentPage === 2 ? 'nav-link active' : 'nav-link'} href="#projects" onClick={() => handlePageChange(2)}>
          Repositorios
        </a>
      </li>
    </ul>
    <CustomModal />
  </nav>
      <div style={{ width: '100%', height: '100%', background: '#253237' }}>
        <BottonsTransition />
      <SideButton />

      <Parallax ref={parallax} pages={3}>
       
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' ,position: 'absolute', zIndex: -1}} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' ,position: 'absolute', zIndex: -1 }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: cloud,
            backgroundSize: 'cover',
          }}
        />
             
        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={satelite} alt="satelite" style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={tecnologia} alt="tecnologia" style={{ display: 'block', width: '10%', marginLeft: '55%' }} />
          <img src={tecnologia} alt="tecnologia" style={{ display: 'block', width: '5%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={tecnologia} alt="cloud" style={{ display: 'block', width: '10%', marginLeft: '70%' }} />
          <img src={tecnologia} alt="cloud" style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={tecnologia} alt="cloud" style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={tecnologia} alt="cloud" style={{ display: 'block', width: '15%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={tecnologia} alt="cloud" style={{ display: 'block', width: '15%', marginLeft: '20%' }} />
          <img src={proyectos} alt="cloud" style={{ display: 'block', width: '20%', marginLeft: '30%' }} />
          <img src={proyectos} alt="cloud" style={{ display: 'block', width: '20%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={proyectos} alt="cloud" style={{ display: 'block', width: '13%', marginLeft: '5%' }} />
          <img src={proyectos} alt="cloud" style={{ display: 'block', width: '5%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={cloud} alt="cloud" style={{ width: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: cloud,
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onMouseEnter={()=> setCurrentPage(0)}
          onTouchStart={()=> setCurrentPage(0)}
          onClick={() => { 
            parallax.current.scrollTo(0);
            setCurrentPage(0); 
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <KnowMe/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          PageChange
          onMouseEnter={()=> setCurrentPage(1)}
          onTouchStart={()=> setCurrentPage(1)}
          onClick={() => { 
            parallax.current.scrollTo(1)
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Technologies/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={()=> setCurrentPage(2)}
          onTouchStart={()=> setCurrentPage(2)}
          onClick={() => parallax.current.scrollTo(2)}>
          <Projects/>
        </ParallaxLayer>
      </Parallax>
      </div>
      
    </div>
  );
}
