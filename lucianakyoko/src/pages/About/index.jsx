import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';

import './style.scss';

const About = () => {
  return (
    <main className='about'>
      <Header pageName="Sobre"/>
      <div className="about__container">
        <p className='about__paragraph-dark'>Trabalho com...</p>
        <p className='about__paragraph'>desenvolvimento <span className='darker'>front-end</span>. Desenvolvo páginas web e landing pages com muito carinho.</p>
        <p className='about__paragraph-dark'>Ah! Também...</p>
        <p className='about__paragraph'>me arrisco no design de layouts e sou apaixonada por páginas criativas. Às vezes desenvolvo alguns joguinhos, assim, como quem não quer nada.</p>
        <p className="about__paragraph-dark">Atualmente...</p>
        <p className='about__paragraph'>estou dedicada aos estudos de <span className='darker'>React</span> e <span className='darker'>Next.js</span>. Amo o que faço e estou altamente motivada para colaborar em um projeto.</p>

        <a href='https://drive.google.com/file/d/1GLXPkXm5VoYyhAlpEe8fG1Vi5wFchiWU/view?usp=sharing' className='about__button' rel="noopener noreferrer" target='_blank'>
          <Button title="fazer downloado do currículo" icon="fas fa-file-download" btnName="Currículo"/>
        </a>
      </div>
    </main>
  );
};

export default About;