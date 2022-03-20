import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { getPages } from '../../datas/pages';
import Button from '../Button';

const MenuCarousel = () => {
  const pages = getPages();

  const radius = 180;
  const [slideIndex, setSlideIndex] = React.useState(1)
  const [rotate, setRotate] = React.useState(0);
  
  React.useEffect(() => {
    const carouselItems = document.querySelectorAll('.carousel__item');
    const carousel = document.querySelector('.carousel');

    for(let i = 0; i < carouselItems.length; i++) {
      carouselItems[i].style.transform = `rotateX(${i * (360 / carouselItems.length)}deg) translateZ(${radius}px)`;
      carouselItems[i].style.transition = 'transform 1s';
      carouselItems[i].style.transitionDelay = `${(carouselItems.length -i) / 4}s`;
    }
    carousel.style.transform = 'rotateY(6deg)';

  }, []);

  const nextItem = () => {    
    if(slideIndex !== pages.length) {
      setSlideIndex(slideIndex + 1); 
      setRotate(-60 * slideIndex );  
      
    } else if (slideIndex === pages.length) {
      setSlideIndex(1);
      setRotate(0)
    }   
  };

  return (
      <nav className='carousel-container'>
        <ul className='carousel' style={{transform: `rotateX(${rotate}deg)`}}>
          { pages.map((item, index) => (
            <li key={item.id} className={slideIndex === index + 1 ? 'carousel__item active': 'carousel__item'} title={`Ir para a página ${item.title}`}>
              <Link to={item.link} className='carousel__item-link'>{item.title} </Link>
            </li>)
          ) }
        </ul>

        <div className='carousel__button' onClick={nextItem}>
          <Button icon='fas fa-caret-left' btnName='menu' title='clique para navegar pelo menu'/>
        </div>
      </nav>
  );
};

export default MenuCarousel;