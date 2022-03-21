import React from 'react';
import './style.scss';

import Header from '../../components/Header';
import GameItem from '../../components/GameItem';
import changeTabTitle from '../../utils/changeTabTitle';

const Game = () => {
  changeTabTitle('Luciana Kyoko | Jogos');
  return (
    <section className='game-page'>
      <Header pageName='Jogos' />
      <GameItem />
    </section>
  )
}

export default Game