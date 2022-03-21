import React from 'react';
import './style.scss';

import Header from '../../components/Header';
import BadgeFront from '../../components/BadgeFront';
import BadgeBack from '../../components/BadgeBack';
import Pulse from '../../components/Pulse';
import changeTabTitle from '../../utils/changeTabTitle';


const Badge = () => {
  changeTabTitle('Luciana Kyoko | Badge');
  
  const [active, setActive] = React.useState(false);
  
  function handleClick() {
    setActive(!active);
  }

  return (
    <main className='badge-page'>
      <Header pageName="Luciana Kyoko"/>
        <div className={active ? 'badge active' : 'badge'}>
          <div className='badge__flip-btn' onClick={handleClick} title='Clique para girar e ver o outro lado do cartão.'>
            <Pulse />
          </div>
          <BadgeFront />
          <BadgeBack />
        </div>
    </main>
  );
};

export default Badge;