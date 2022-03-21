import React from 'react';
import './style.scss';

import { getProjects } from '../../datas/projects';
import Header from '../../components/Header';
import ProjectItem from '../../components/ProjectItem';
import { Link } from 'react-router-dom';
import changeTabTitle from '../../utils/changeTabTitle';

const Portfolio = () => {
  changeTabTitle('Luciana kyoko | Portfolio');
  
  const projects = getProjects();

  return (
    <main className='portfolio-page'>
      <Header pageName='portfolio' voltarPara='home' />
      <div className='portfolio__container'>
        {projects.map(item => (
          <Link key={item.id} to={`/portfolio/${item.id}`}>
            <ProjectItem project={item} />
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Portfolio;