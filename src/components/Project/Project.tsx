import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";

import { ThreeDCardDemo } from "./ProjectCard";

import pglife from '../../assets/project/pglife.png'
import pchess from '../../assets/project/pchess.png'
import cellfusion from '../../assets/project/cellfusion.png'
import SLD from '../../assets/project/SLD.png'
import protfolio1 from '../../assets/project/protfolio1.png'
import protfolio2 from '../../assets/project/protfolio2.png'
import userManager from '../../assets/project/userManager.png'
export function Project() {
  return (

    <Container id="project">
      <h2 className="font-bold" style={{color: '#23ce6b'}}>Projects</h2>
      <div className="projects">


        <ThreeDCardDemo 
          title={'Pchess - A mulitplayer online Chess game'} 
          tech={'React.js, Node.js, ExpressJS, Socket.IO, CSS'}
          image={pchess}

          link={'https://pchess-pureshwar.vercel.app/'}
        />

        <ThreeDCardDemo 
          title={'User Manager - Admin-Managed User Access'} 
          tech={'HTML, CSS, JavaScript, EJS, MongoDB'}
          image={userManager}
          link={'https://github.com/PureshwarGonekar/User-Management-System'}
        />

        <ThreeDCardDemo 
          title={'PG Life - A PG listings website across different regions'} 
          tech={'HTML, CSS, Bootstrap, JavaScript, PHP, MySQL'}
          image={pglife}
          link={'http://pglife-pureshwar.42web.io/'}
        />


        <ThreeDCardDemo 
          title={'CellFusion - A mobile, gadget selling website'} 
          tech={'HTML, CSS, Bootstrap, JavaScript, PHP, MySQL'}
          image={cellfusion}
          link={'https://cellfusion.000webhostapp.com/'}
        />

        <ThreeDCardDemo 
          title={'Sign Language Detection System'} 
          tech={'Python, Keras, Pandas, Numpy'}
          image={SLD}
          link={'https://github.com/PureshwarGonekar/Sign-Language-Detection'}
        />

        <ThreeDCardDemo 
          title={'Portfolio 2.0  - My personal portfolio website'} 
          tech={'React Js, Typescript, Tailwind CSS, Aceternity UI '}
          image={protfolio2}
          link={'#'}
        />

        <ThreeDCardDemo 
          title={'Portfolio 1.0  - My personal portfolio website'} 
          tech={'HTML, CSS, JavaScript, Bootstrap'}
          image={protfolio1}
          link={'https://pureshwargonekar.github.io/My-Resume/'}
        />

     </div>
    </Container>
  );
}