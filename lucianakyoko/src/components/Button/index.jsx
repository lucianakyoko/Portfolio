import React from 'react';
import './style.scss';

const Button = ({icon, btnName, title}) => {
  return (
    <button className='button' title={title}>
      <i className={icon}></i>
      <span className='button__name'>{btnName}</span>
    </button>
  )
}

export default Button