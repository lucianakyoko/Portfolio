import React from 'react';
import './style.scss';

const RetroBackground = () => {
  const line = <div className='line'></div>

  return (
    <div className='background'>    
      <div className="background__floor"></div>  
    
      <div className="background__grid">
        <div className="background__grid-inner">
          <div className="background__hori">
            {line} {line} {line} {line} {line} {line}
            {line} {line} {line} {line} {line} {line}       
          </div>
          <div className="background__vert">
            {line} {line} {line} {line} {line} 
            {line} {line} {line} {line} {line}       
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroBackground;