/* UTILS */
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

/* COMPONENTS */
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import AnimatedText from './Components/AnimatedText/AnimatedText';
import IconButton from './Components/IconButton/IconButton';
import CardProject from './Components/CardProject/CardProject';

/* Styles and Images */
import './App.css';

import Cv from '../public/Thiago Fidêncio.pdf';
/* Icons */
import github2Icon from './assets/github2-icon.svg';
import instagramIcon from './assets/instagram-icon.svg';
import linkedinIcon from './assets/linkedin-icon.svg';
import brainIcon from './assets/brain-icon.svg';
import heartIcon from './assets/heart-icon.svg';
import arrowIcon from './assets/arrow-icon.svg';
import webDevIcon from './assets/web-dev-icon.svg';
import emailIcon from './assets/email-icon.svg';
/* Images */
import purpleframeImg from '../public/Purpleframe.jpg';
import aluraFlixImg from '../public/Aluraflix.jpg';
import atomBankImg from '../public/AtomBank.jpg';
import homzyImg from '../public/Homzy.jpg';

const App = () => {

  const textToAnimate = [ 
    'Hello, I am'.split(''), 
    'thiago'.split(''), 
  ];
  
  const useAtWork = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Azure',
    'NodeJS',
    'Git',
    'Github',
    'Firebase'
  ];
  const learningProcess = [
    'Tailwind',
    'NextJS',
    'MySQL',
    'Figma',
    'Jest'
  ];

  return (
    <>
      
      <header id="home" className="app-header">
        <Navbar/>
        <Sidebar/>
        <div className="header-wrapper">
          
          <div className="header-title">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate="visible"
              transition={{duration: 0.4, delay: 0.25}}
            >
               
              {
                textToAnimate[0].map(
                  (letter, i) => <AnimatedText key={i}>{letter === ' ' ? '\u00A0' : letter}</AnimatedText>
                )
              }
              
              <p className="header-title_desc">
                A <span className="highlighted-white">front-end</span> developer fascinating with <span className="highlighted-white" >modern</span> styles
              </p>
             
              {
                textToAnimate[1].map((letter, i) => <AnimatedText key={i}>{letter === ' ' ? '\u00A0' : letter}</AnimatedText>)
              }
              
            </motion.div>
            <a className="header-title_btn" href={Cv} download={Cv} >Download cv</a>
          </div>
          
          
          <Link className="scrollDown" to="about" spy={true} smooth={true} offset={50} duration={500}>
            <span>Scroll Down</span>
            <span></span>
          </Link>
          
        </div>
      </header>

      <main className="app-main">

        <section id="about" className="about">
          <div className="about-head">
            <h2>About<span>.</span></h2>
            <span></span>
          </div>
          <div className="about-wrapper">
            <section className="about-left">
              <p>
                Hello, I&#39;m Thiago Fidêncio, a front-end developer residing in the country of Brazil. Since I was a child, I&#39;ve always been interested in games and technology. I&#39;ve always liked creating something from scratch and understanding how things work.
              </p>
              <p>
                I believe that creating logical and creative solutions is one of the factors that most attracts me to embark on a journey into the world of coding and software development.
              </p>
              <p>
                My days are filled with lines of code, where I&#39;m constantly exploring new ways to solve problems and create innovative solutions. I find immense satisfaction in crafting software that not only functions flawlessly but also makes a positive impact on people&#39;s lives.
              </p>
              <p>
                As I continue to grow as a software developer, I am excited to learn, adapt, and contribute to the ever-evolving tech landscape. Feel free to connect with me, whether it&#39;s to discuss the latest anime series, share programming insights, or engage in epic gaming quests.
              </p>

              <div className="about-links">
                <span>My links {'->'}</span>
                <ul>
                  <li>
                    <IconButton text="Linkedin" href="https://www.linkedin.com/in/ythiago03/">
                      <img src={linkedinIcon} alt="Link com a logo do Linkedin" />      
                    </IconButton>
                  </li>
                  <li>
                    <IconButton text="Github" href="https://github.com/ythiago03">
                      <img src={github2Icon} alt="Link com a logo do Github" />      
                    </IconButton>
                  </li>
                  <li>
                    <IconButton text="Instagram" href="https://www.instagram.com/ythiago03/">
                      <img src={instagramIcon} alt="Link com a logo do Instagram" />    
                    </IconButton>
                  </li>
                </ul>
              </div>
            </section>

            <section className="about-right">
              <div className="skills-wrapper">
                <div>
                  <img src={webDevIcon} alt="Ícone de código" />
                  <h3>Use at work</h3>
                </div>
                <div className="skills">
                  {useAtWork.map((skill, index) => <span key={index}>{skill}</span> )}
                </div>
              </div>
              <div className="skills-wrapper">
                <div>
                  <img src={brainIcon} alt="Ícone de cérebro" />
                  <h3>Learning Process</h3>
                </div>
                <div className="skills">
                  {learningProcess.map((skill, index) => <span key={index}>{skill}</span> )}
                </div>
              </div>
            </section>
          </div>
          
        </section>

        <section id="projects" className="projects">
          <div className="projects-head">
            <span></span>
            <h2>Projects<span>.</span></h2>
          </div>
          <div className="cards">
            <CardProject 
              cardCover={purpleframeImg} 
              name="Purpleframe"
              tecs={['React','Javascrit','HTML', 'CSS', 'Firebase']}
              repo="https://github.com/ythiago03/purpleframe"
              demo="https://purpleframe.vercel.app/login"
              desc="PurpleFrame is a photo and video sharing social networking service owned by American company Meta Platforms."
            />
            <CardProject 
              cardCover={aluraFlixImg}
              name="Aluraflix"
              tecs={['Javascrit','HTML', 'CSS']}
              repo="https://github.com/ythiago03/aluraImersao/tree/main/aula4-5"
              demo="https://ythiagoalurafilx.netlify.app/"
              desc="Aluraflix is a movie and anime app made with immersion dev in which you can add new movies/animes or remove them."
            />
            <CardProject 
              cardCover={homzyImg}
              name="Homzy"
              tecs={['React','Javascrit','HTML', 'CSS']}
              repo="https://github.com/ythiago03/Homzy-Landingpage"
              demo="https://homzy.vercel.app/"
              desc="Homzy is a page for purchasing high-quality and super modernized properties."
            />
            <CardProject 
              cardCover={atomBankImg} 
              name="AtomBank"
              tecs={['React','Javascrit','HTML', 'CSS']}
              repo="https://github.com/ythiago03/AtomBank"
              demo="https://atom-bank.vercel.app/"
              desc="AtomBank is a banking app where you have everything in the palm of your hand."
            />
          </div>
        </section>  

        <section id="contact" className="contact">
          <div className="contact-head">
            <span></span>
            <h2>Contact<span>.</span></h2>
            <span></span>
          </div>
          <div className="contact-wrapper">
            <p>
              Send me a email or chat me on 
              <a href="https://www.linkedin.com/in/ythiago03/" className="highlighted-white" target="_blank" rel="noreferrer" >
                Linkedin
              </a> 
               or 
              <a href="https://www.instagram.com/ythiago03/" className="highlighted-white" target="_blank" rel="noreferrer" >
                Instagram
              </a>
            </p>
            <a  href="mailto:ythiagohcfidencio@gmail.com" className="highlighted-white" target="_blank" rel="noreferrer">
              <img src={emailIcon} alt="" />ythiagohcfidencio@gmail.com
            </a>
          </div>    
        </section>      

      </main>

      <footer className="app-footer">
        <span>Made with <img src={heartIcon} alt="" /> by <a href="https://github.com/ythiago03"target="_blank" rel="noreferrer" >Thiago<span>.</span></a></span>
        <span>
          <Link className="highlighted-white" to="home" spy={true} smooth={true} offset={-35} duration={500}>
            <img src={arrowIcon} alt="Ícone de seta para cima indicando ir para o topo do site"/>
          </Link>
        </span>
      </footer>
    </>
  );
};

export default App;
