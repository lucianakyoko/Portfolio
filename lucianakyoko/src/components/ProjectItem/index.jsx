import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const ProjectItem = ({ project }) => {

  return (
    <div className='project-item__container'>
      <img className='project-item__image' src={`../images/projects/${project.image}`} alt='Screenshot do projeto' />

      <Link  
        to={`/portfolio/${project.id}`} 
        id={project.id} 
        className='project-item__title-box' 
        title='Clique para conhecer os detalhes deste projeto.'
      >
        <h2 className='project-item__title'>{project.title}</h2>
        <h3 className='project-item__usbtitle'>{project.subtitle}</h3>
      </Link>
    </div>

  )
}

export default ProjectItem