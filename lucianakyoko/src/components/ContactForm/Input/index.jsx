import React from 'react';
import './style.scss';


const Input = ({type, label, id, ...props}) => {
  return (
    <div className='input'>
      <input className='input__input' id={id} type={type} {...props} />
      <label className='input__label' htmlFor={id}> {label}</label>
    </div>
  );
};

export default Input;