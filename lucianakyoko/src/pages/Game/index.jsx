import React from 'react';
import './style.scss';

import Header from '../../components/Header';
import GameItem from '../../components/GameItem';

const Game = () => {
  return (
    <section className='game-page'>
      <Header pageName='Jogos' />
      <GameItem />
    </section>
  )
}

export default Game