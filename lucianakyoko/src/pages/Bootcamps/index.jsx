import React from 'react';
import './style.scss';
import RetroBackground from '../../components/RetroBackground';

import Header from '../../components/Header';

const Bootcamps = () => {
  return (
    <main className='bootcamps-page'>
      <Header pageName='Bootcamps'/>
      <div className='message-box'>
        <h2 className='message-title'>Esta página está sendo desenvolvida com muito carinho.</h2>
        <p className='message-paragraph'>
          Por favor, volte mais tarde.
        </p>
      </div>
      <RetroBackground />
    </main>
  )
};

export default Bootcamps;