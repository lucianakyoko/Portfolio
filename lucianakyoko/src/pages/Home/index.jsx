import React from 'react';
import './style.scss';

import CarouselMenu from '../../components/CarouselMenu';
import RetroBackground from '../../components/RetroBackground';
import changeTabTitle from '../../utils/changeTabTitle';

const Home = () => {
  changeTabTitle('Luciana Kyoko | Front-end Developer');
  return (
    <main className='home'>
      <CarouselMenu />
      <RetroBackground /> 
    </main>
  )
}

export default Home;