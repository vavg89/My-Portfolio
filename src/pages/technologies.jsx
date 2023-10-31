import React from "react";
import './PagesStyless.css';
import BottonsTransition from "../components/BottonsTransition";
import SideButton from "../components/SideButton"
import TransitionImage from "../components/TransitionImage"
import Bootstrap from '../assets/bootstrap.png';
import Fingma from "../assets/figma.png";
import Photoshop from "../assets/photoshop.png";
import Gimp from "../assets/gimp.png";
import Versel from '../assets/versel.png';
import Hostinger from "../assets/hostinger.png";
import Cloudinary from '../assets/cloudinary.png';
import GithubTecnologies from '../assets/githubTecnologies.png';
import Sequalice from '../assets/sequalice.png';
import Sqlserver from '../assets/sqlserver.jpeg';
import Mysql from "../assets/mysql.png";
import Postgresql from "../assets/postgresql.png";
import Apacheserver from "../assets/apacheserver.jpeg";
import Reactspring from "../assets/reactspring.jpeg";
import ReactImg from "../assets/react.png";
import ReduxImg from "../assets/redux.png";
import Nodejs from "../assets/nodejs.png";
import PhpImg from "../assets/php.png";
import Javascript from "../assets/javascript.png";
import Expressimg from "../assets/express.png";

const images = [
  { src: Bootstrap, alt: "Bootstrap", url: "https://getbootstrap.com" },
  { src: Fingma, alt: "Fingma", url: "https://www.figma.com" },
  { src: Photoshop, alt: "Photoshop", url: "https://www.adobe.com/ar/products/photoshop.html" },
  { src: Gimp, alt: "Gimp", url: "https://www.gimp.org" },
  { src: Versel, alt: "Versel", url: "https://vercel.com" },
  { src: Hostinger, alt: "Hostinger", url: "https://www.hostinger.com.ar" },
  { src: Cloudinary, alt: "Cloudinary", url: "https://cloudinary.com" },
  { src: GithubTecnologies, alt: "GithubTecnologies", url: "https://github.com" },
  { src: Sequalice, alt: "Sequalice", url: "https://sequelize.org" },
  { src: Sqlserver, alt: "Sqlserver", url: "https://www.microsoft.com/es-ar/sql-server/sql-server-downloads" },
  { src: Mysql, alt: "Mysql", url: "https://www.mysql.com" },
  { src: Postgresql, alt: "Postgresql", url: "https://www.postgresql.org" },
  { src: Apacheserver, alt: "Apacheserver", url: "https://www.apache.org" },
  { src: Reactspring, alt: "Reactspring", url: "https://www.react-spring.dev" },
  { src: ReactImg, alt: "ReactImg", url: "https://es.react.dev" },
  { src: ReduxImg, alt: "ReduxImg", url: "https://redux.js.org" },
  { src: Nodejs, alt: "Nodejs", url: "https://nodejs.org/en" },
  { src: PhpImg, alt: "PhpImg", url: "https://www.php.net" },
  { src: Javascript, alt: "Javascript", url: "https://www.javascript.com" },
  { src: Expressimg, alt: "Expressimg", url: "https://expressjs.com/es" },
];

function Technologies() {
  
  return (
    <div className="Background container-fluid">
      <BottonsTransition/>
      <SideButton/>
      <div className="images-container">
        {images.map((image, index) => (
          <TransitionImage key={index} delay={(index + 1) * 5} url={image.url}>
            <img src={image.src} alt={image.alt} className="tech-image" />
          </TransitionImage>
        ))}
      </div>
             
    </div>
  );
}

export default Technologies;