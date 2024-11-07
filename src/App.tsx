/* UTILS */
import { Link } from 'react-scroll';
import { useState, createContext, SetStateAction, Dispatch } from 'react';

/* COMPONENTS */
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import AnimatedText from './Components/AnimatedText/AnimatedText';
import IconButton from './Components/IconButton/IconButton';
import CardProject from './Components/CardProject/CardProject';

/* Styles and Images */
import './App.css';

import Cv from '../public/Thiago Fidêncio CV (1).pdf';
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
import mangaStoreImg from '../public/MangaStore.png';
import Physiosearch from '../public/physiosearch.png';
import Motion from './Components/Motion/Motion';

interface UserContextType {
  languageToggle: boolean | null,
  setLanguageToggle: Dispatch<SetStateAction<boolean>> 
}

export const AppContext = createContext<UserContextType>({languageToggle: null, setLanguageToggle: () =>{}});

const App = () => {

  const [languageToggle, setLanguageToggle] = useState(false);
  const englishText: string[][] = [];
  const portugueseText: string[][] = [];

  const animatedText = {
    englishText: 'hello, i am thiago'.split(' '),
    portugueseText: 'olá, eu sou thiago'.split(' ')
  };
  
  const createAnimatedText = (language: string) => {
    
    animatedText.portugueseText.forEach(word => {
      portugueseText.push(word.split(''));
    });

    animatedText.englishText.forEach(word => {
      englishText.push(word.split(''));
    });

    return(
      language == 'en' 
        ? 
        <div className="motion-title_wrapper">
          <h1>
            {englishText[0].map((letter, i) => <AnimatedText key={i}>{letter === ' ' ? '\u00A0' : letter}</AnimatedText>
            )}
          </h1>
          <h1>
            {englishText[1].map((letter, i) => <AnimatedText key={i}>{letter === ' ' ? '\u00A0' : letter}</AnimatedText>
            )}
          </h1>
          <h1>
            {englishText[2].map((letter, i) => <AnimatedText key={i}>{letter === ' ' ? '\u00A0' : letter}</AnimatedText>
            )}
          </h1>
        </div> 
        : 
        <div className="motion-title_wrapper">
          <h1>
            {portugueseText[0].map((letter, i) => <AnimatedText key={i}>{letter === ' ' ? '\u00A0' : letter}</AnimatedText>
            )}
          </h1>
          <h1>
            {portugueseText[1].map((letter, i) => <AnimatedText key={i}>{letter === ' ' ? '\u00A0' : letter}</AnimatedText>
            )}
          </h1>
          <h1>
            {portugueseText[2].map((letter, i) => <AnimatedText key={i}>{letter === ' ' ? '\u00A0' : letter}</AnimatedText>
            )}
          </h1>
        </div> 
    );
    
  };

  const useAtWork = [
    'JavaScript',
    'TypeScript',
    'React',
    'Angular',
    'HTML',
    'CSS',
    'Azure',
    'NodeJS',
    'Git',
    'Github',
    'Firebase',
    'Tailwind',
    'Java',
    'Spring',
    'Docker',
  ];
  const learningProcess = [
    'NextJS',
    'MySQL',
    'Figma',
    'Jest'
  ];

  return (
    <>
      <AppContext.Provider value={{languageToggle, setLanguageToggle}}>
        <header id="home" className="app-header">
          <Navbar/>
          <Sidebar/>
          <section className="header-wrapper">
          
            <div className="header-title">
              <Motion>
                <div>
                  {languageToggle 
                    ? createAnimatedText('pt-br')
                    : createAnimatedText('en')
                  }
              
                  {languageToggle 
                    ? <p className="header-title_desc">
                      Um desenvolvedor <span className="highlighted-white">front-end</span>  fascinado por estilos <span className="highlighted-white" >modernos</span> 
                    </p>
                    : <p className="header-title_desc">
                      A <span className="highlighted-white">front-end</span> developer fascinating with <span className="highlighted-white" >modern</span> styles
                    </p>
                  } 
             
                  {englishText[3].map((letter, i) => <AnimatedText key={i}>{letter === ' ' ? '\u00A0' : letter}</AnimatedText>
                  )}
                </div>
              </Motion>
              <a className="header-title_btn" href={Cv} download={Cv} >
                {languageToggle ? 'Baixar Currículo' : 'Download cv'}
              </a>
            </div>
          
          
            <Link className="scrollDown" to="about" spy={true} smooth={true} offset={50} duration={500}>
              <span>Scroll Down</span>
              <span></span>
            </Link>
          
          </section>
        </header>

        <main className="app-main">

          <section id="about" className="about">
            <div className="about-head">
              <h2>{languageToggle ? 'Sobre' : 'About'}<span>.</span></h2>
              <span></span>
            </div>
            <div className="about-wrapper">
              <section className="about-left"
                
              >
                {languageToggle 
                  ? <>
                    <Motion>
                      <p> 
                        Olá, eu sou Thiago Fidêncio, um desenvolvedor front-end residente no Brasil. Desde que era criança, sempre me interessei por jogos e tecnologia. Sempre gostei de criar algo do zero e entender como as coisas funcionam.
                      </p>
                    </Motion>
                    
                    <Motion>
                      <p>
                        Acredito que criar soluções lógicas e criativas é um dos fatores que mais me atraiu a embarcar em uma jornada no mundo da programação e desenvolvimento de software.
                      </p>  
                    </Motion>
                    
                    <Motion>
                      <p>
                        Meus dias são preenchidos com linhas de código, onde estou constantemente explorando novas maneiras de resolver problemas e criar soluções inovadoras. Encontro imensa satisfação em desenvolver software que não apenas funcione perfeitamente, mas também tenha um impacto positivo na vida das pessoas.
                      </p> 
                    </Motion>
                    
                    <Motion>
                      <p>
                        À medida que continuo a crescer como desenvolvedor de software, estou empolgado em aprender, adaptar e contribuir para o cenário tecnológico em constante evolução. Sinta-se à vontade para entrar em contato comigo, seja para discutir as últimas séries de anime, compartilhar insights de programação ou se envolver em épicas jornadas de jogos.
                      </p> 
                    </Motion>
                    
                  </>
                  : <>
                    <Motion>
                      <p>
                        Hello, I&#39;m Thiago Fidêncio, a front-end developer residing in the country of Brazil. Since I was a child, I&#39;ve always been interested in games and technology. I&#39;ve always liked creating something from scratch and understanding how things work.
                      </p>
                    </Motion>
                    
                    <Motion>
                      <p>
                        I believe that creating logical and creative solutions is one of the factors that most attracts me to embark on a journey into the world of coding and software development.
                      </p>
                    </Motion>
                    
                    <Motion>
                      <p> 
                        My days are filled with lines of code, where I&#39;m constantly exploring new ways to solve problems and create innovative solutions. I find immense satisfaction in crafting software that not only functions flawlessly but also makes a positive impact on people&#39;s lives.
                      </p>
                    </Motion>
                    
                    <Motion>
                      <p>
                        As I continue to grow as a software developer, I am excited to learn, adapt, and contribute to the ever-evolving tech landscape. Feel free to connect with me, whether it&#39;s to discuss the latest anime series, share programming insights, or engage in epic gaming quests.
                      </p>
                    </Motion>
                    
                  </>
                }
                

                <div className="about-links">
                  <span>{languageToggle ? 'Meus Links ->' : 'My Links ->'}</span>
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
                <Motion>
                  <div className="skills-wrapper">
                    <div>
                      <img src={webDevIcon} alt="Ícone de código" />
                      <h3>{languageToggle ? 'Uso no Trabalho' : 'Used at Work'}</h3>
                    </div>
                    <div className="skills">
                      {useAtWork.map((skill, index) => <Motion key={index}><span >{skill}</span></Motion>  )}
                    </div>
                  </div>
                </Motion>
                <Motion>
                  <div className="skills-wrapper">
                    <div>
                      <img src={brainIcon} alt="Ícone de cérebro" />
                      <h3>{languageToggle ? 'Processo de Aprendizado' : 'Learning Process'}</h3>
                    </div>
                    <div className="skills">
                      {learningProcess.map((skill, index) => <Motion key={index}><span >{skill}</span></Motion> )}
                    </div>
                  </div>
                </Motion>
              </section>
            </div>
          
          </section>

          <section id="projects" className="projects">
            <div className="projects-head">
              <span></span>
              <h2>{languageToggle ? 'Projetos' : 'Projects'}<span>.</span></h2>
            </div>
            <div className="cards">
              <Motion>
                <CardProject 
                  cardCover={purpleframeImg} 
                  name="Purpleframe"
                  tecs={['React','Javascrit','HTML', 'CSS', 'Firebase']}
                  repo="https://github.com/ythiago03/purpleframe"
                  demo="https://purpleframe.vercel.app/login"
                  desc={languageToggle ? 'PurpleFrame é um serviço de rede social de compartilhamento de fotos e vídeos.' : 'PurpleFrame is a photo and video sharing social networking service.' }
                />
              </Motion>
              <Motion>
                <CardProject 
                  cardCover={mangaStoreImg}
                  name="MangaStore"
                  tecs={['Typescript', 'React', 'HTML', 'CSS']}
                  repo="https://github.com/ythiago03/manga-store"
                  demo="https://manga-store-ythiago03.vercel.app/"
                  desc={languageToggle ? 'Criação de um site e-commerce especializado na venda de mangás. A plataforma oferece uma interface amigável e intuitiva, permitindo aos usuários navegar e encontrar seus títulos favoritos com facilidade. ' : 'Development of an e-commerce website specializing in manga sales. The platform offers a user-friendly and intuitive interface, allowing users to easily browse and find their favorite titles.' }
                />
              </Motion>
              
              <Motion>
                <CardProject 
                  cardCover={Physiosearch}
                  name="Physiosearch"
                  tecs={['React','Typescript','HTML', 'SCSS']}
                  repo="https://github.com/ythiago03/physiosearch"
                  demo="https://physiosearch.vercel.app/"
                  desc={languageToggle ? 'PhysioSearch é um projeto proposto por um grupo de estudantes de fisioterapia com o objetivo de facilitar o estudo e a visualização do corpo humano. O sistema permite que os estudantes visualizem um esqueleto 2D interativo, onde podem aplicar zoom, manipular a imagem e acessar informações detalhadas de áreas específicas do corpo. Cada parte clicável do esqueleto redireciona os usuários para uma visualização mais detalhada da área, que inclui links para artigos e tratamentos relacionados.' : 'PhysioSearch is a project proposed by a group of physiotherapy students with the goal of facilitating the study and visualization of the human body. The system allows students to view an interactive 2D skeleton, where they can zoom, manipulate the image and access detailed information about specific areas of the body. Each clickable part of the skeleton redirects users to a more detailed view of the area, which includes links to related articles and treatments.'}
                />
              </Motion>
              
            </div>
          </section>  

          <section id="contact" className="contact">
            <div className="contact-head">
              <span></span>
              <h2>{languageToggle ? 'Contato' : 'Contact'}<span>.</span></h2>
              <span></span>
            </div>
            <Motion>
              <div className="contact-wrapper">
                {languageToggle 
                  ? <p>
                      Me envie um email ou me chame no
                    <a href="https://www.linkedin.com/in/ythiago03/" className="highlighted-white" target="_blank" rel="noreferrer" >
                      Linkedin
                    </a> 
                      ou 
                    <a href="https://www.instagram.com/ythiago03/" className="highlighted-white" target="_blank" rel="noreferrer" >
                      Instagram
                    </a>
                  </p> 
                  : <p>
                      Send me a email or chat me on 
                    <a href="https://www.linkedin.com/in/ythiago03/" className="highlighted-white" target="_blank" rel="noreferrer" >
                      Linkedin
                    </a> 
                      or 
                    <a href="https://www.instagram.com/ythiago03/" className="highlighted-white" target="_blank" rel="noreferrer" >
                      Instagram
                    </a>
                  </p>
                }
              
                <a  href="mailto:ythiagohcfidencio@gmail.com" className="highlighted-white" target="_blank" rel="noreferrer">
                  <img src={emailIcon} alt="" />ythiagohcfidencio@gmail.com
                </a>
              </div>    
            </Motion>        
          </section>      

        </main>

        <footer className="app-footer">
          {languageToggle 
            ? <span>Feito com <img src={heartIcon} alt="" /> por <a href="https://github.com/ythiago03"target="_blank" rel="noreferrer" >Thiago<span>.</span></a>
            </span>
            : <span>Made with <img src={heartIcon} alt="" /> by <a href="https://github.com/ythiago03"target="_blank" rel="noreferrer" >Thiago<span>.</span></a>
            </span>
          }     
          <span>
            <Link className="highlighted-white" to="home" spy={true} smooth={true} offset={-35} duration={500}>
              <img src={arrowIcon} alt="Ícone de seta para cima indicando ir para o topo do site"/>
            </Link>
          </span>
        </footer>
      </AppContext.Provider>
    </>
  );
};

export default App;
