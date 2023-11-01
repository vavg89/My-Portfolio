import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import KnowMe from '../pages/knowMe';
import Navbar from '../components/navbar';
import Technologies from '../pages/technologies';
import BottonsTransition from '../components/BottonsTransition';
import SideButton from '../components/SideButton';
import Projects from './projects';


const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export default function ParallaxPages() {
  const parallax = useRef(null);
  
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Navbar parallax={parallax}/>
      <BottonsTransition/>
      <SideButton/>

      <Parallax ref={parallax} pages={3}>
       
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' ,position: 'absolute', zIndex: -1}} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' ,position: 'absolute', zIndex: -1 }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
        
        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} alt="satelite" style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} alt="cloud" style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} alt="cloud" style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} alt="cloud" style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} alt="cloud" style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} alt="cloud" style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} alt="cloud" style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} alt="cloud" style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} alt="cloud" style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} alt="cloud" style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} alt="cloud" style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} alt="cloud" style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
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
          <img src={url('earth')} alt="earth" style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(0)}
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
          onClick={() => parallax.current.scrollTo(1)}
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
          onClick={() => parallax.current.scrollTo(2)}>
          <Projects/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
