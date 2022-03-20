import React from 'react';
import './style.scss';

import CarouselMenu from '../../components/CarouselMenu';
import RetroBackground from '../../components/RetroBackground';

const Home = () => {
  return (
    <main className='home'>
      <CarouselMenu />
      <RetroBackground /> 
    </main>
  )
}

export default Home;