import React from 'react';
import './style.scss';

const Textarea = ({label, id, ...props}) => {
  return (
    <div className='textarea'>
      <textarea className='textarea__textarea' id={id} cols="33" rows="5" {...props}></textarea>
      <label className="textarea__label" htmlFor={id}>{label}</label>
      
    </div>
  );
};

export default Textarea;