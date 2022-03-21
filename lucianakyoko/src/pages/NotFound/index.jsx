import React from 'react';
import './style.scss';
import RetroBackground from '../../components/RetroBackground';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import changeTabTitle from '../../utils/changeTabTitle';


const NotFound = () => {
  changeTabTitle('Luciana Kyoko | Front-end Developer');
  
  return (
    <main className='notfound-page'>
      <div className='notfound-container'>
        <h2 className='notfound-title'>404 - Not Found</h2> 

        <div className='not-found-text-box'>
          <p className='not-found-text'>Eita, lasqueira!</p>
          <p className='not-found-text'>Não há traços de civilização por aqui :(</p>
        </div>
        
        <Link to='/'><Button icon='fas fa-arrow-left' btnName='voltar para casa' title='Ir para home' /></Link>
      </div>

      <RetroBackground />
    </main>
  )
}

export default NotFound;