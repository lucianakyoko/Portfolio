import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './style.scss';
import { getProjects } from '../../datas/projects.js'

import Pulse from '../../components/Pulse';
import changeTabTitle from '../../utils/changeTabTitle';

const ProjectFull = () => {
  changeTabTitle('Luciana Kyoko | Projeto');
  
  const [active, setActive] = React.useState(true);
  const handleClick = () => setActive(!active);

  const {projectId} = useParams();
  const project = getProjects().find(item => item.id === projectId);

  return (
 
    <main className='project__container'>
      <div className='project-image__box'>
        <img className='project-image' src={`../images/projects/${project.image}`} alt="Screenshot do projeto" />
      </div>

      <div className='project-details__container'>
        <div className='project-details__titles-box'>
          <h2 className='project-details__title'>{project.title}</h2>
          <h3 className='project-details__subtitle'>{project.subtitle}</h3>

          <Link to={'/portfolio'} className='project-details__pulse' title='Voltar para a página Portifólio'>
            <Pulse />  
          </Link>
        </div>

        <div className='project-details__link-box'>
          <a className='project-details__link' href={project.github} target="_blank"  rel="noreferrer" title="Acesse o código fonte deste projeto">
            <i className="fab fa-github"></i>
            Código fonte
          </a>
          
          <a className='project-details__link' href={project.link} target="_blank"  rel="noreferrer" title='Acesse a página deste projeto'>
            <i className="fas fa-link"></i>
            Link da página
          </a>
        </div>

        <div className='project-details__about-box'>
          <div className='project-details__about-pages'>
            <div className={`page ${active ? 'active' : ''}`}>
              <h2 className='page__title'>Sobre</h2>
              <p className='page__description'>{project.description}</p>
            </div>

            <div className={`page ${!active ? 'active' : ''}`}>
              <h2 className='page__title'>Tecnologias Utilizadas</h2>
              <p className='page__description'>
                {project.tecnologies.map((tecnologie, index) => (
                  <span key={index + 1} className='tecnologie'>{tecnologie}</span>
                ))}
              </p>
            </div>

            <div className='about-box__buttons'>
              <button className={`project-button ${active ? 'active' : ''}`} onClick={handleClick} disabled={!active}>Sobre</button>
              <button className={`project-button ${!active ? 'active' : ''}`} onClick={handleClick} disabled={active}>Techs</button>
            </div> 
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectFull;