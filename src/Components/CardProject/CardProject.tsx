import { useContext, useState } from 'react';
import githubIcon from '../../assets/github-icon.svg';
import logoutIcon from '../../assets/logout-icon.svg';

import './CardProject.css';
import { AppContext } from '../../App';

type Props = {
  cardCover: string,
  name: string,
  tecs: string[],
  repo: string,
  demo: string,
  desc: string,
}

const CardProject = (props: Props) => {

  const {languageToggle} = useContext(AppContext);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="card" >
      <a className="cardImage" href={props.demo} target="_blank" rel="noreferrer">
        <img src={props.cardCover} alt="Imagem do Projeto" />
      </a>

      <div className="card-head">
        <h3 className="highlighted-white">{props.name}</h3>

        <span></span>{/*Line*/}

        <a href={props.repo} target="_blank" rel="noreferrer" >
          <img src={githubIcon} alt="Link com a logo do Github" />
        </a>
        <a href={props.demo} target="_blank" rel="noreferrer">
          <img src={logoutIcon} alt="Link com a logo do Github" />
        </a>
      </div>

      <div className="desc">
        <span>{props.tecs.join(' - ')}</span>

        <p>
          {toggle ? props.desc : props.desc.slice(0, 50) + '...'}
          <button onClick={() => setToggle(!toggle)} >
            {toggle ? languageToggle ? 'Mostrar Menos <' : 'Show less <' : languageToggle ? 'Mostrar Mais >' : 'See More >' }
          </button>
        </p>
      </div>
    </div>
  );
};

export default CardProject;
