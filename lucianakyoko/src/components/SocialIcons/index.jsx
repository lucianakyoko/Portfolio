import React from 'react';
import './style.scss';
import { getSocial } from '../../datas/social';


const SocialIcons = () => {
  const socials = getSocial();
  return (
    <ul className='social-icons'>
      {socials.map(social => (
        <li key={social.id} className='social-icons__icon' title={`Ir para ${social.site}`}>
          <a className='social-icons__link' href={social.link}  rel="noopener noreferrer" target="_blank">
            <i className={social.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialIcons;