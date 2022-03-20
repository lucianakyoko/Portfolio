import React from 'react';
import SocialIcons from '../SocialIcons';
import './style.scss';
import Me from '../../assets/images/me.png';


const BadgeFront = () => {
  return (
    <div className='badge-front'>
      <div className='badge-front__image-section'>
        <img src={Me} alt="Luciana Kyoko" />
      </div>

      <div className='badge-front__data-section data-section'>
        <h2 className='data-section__data-name'>Luciana Kyoko</h2>
        <h3 className='data-section__data-office'>Jr Front-end Developer</h3>
        <p className='data-section__data-paragraph'>Transformo suas ideias em código</p>
        <div className='data-section__data-social-icons'>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default BadgeFront;