import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const Header = ({pageName}) => {
  return (
    <header className='header'>
      <Link to="/" className='header__close-btn' title='Voltar para página inicial'>
        <i className="fas fa-arrow-left"></i>
      </Link>
     
      <p className='header__name'>{pageName}</p>
    </header>
  )
}

export default Header;