import React from 'react';
import './style.scss';
import { getHardSkills } from '../../datas/hardSkills';
import Me from '../../assets/images/me.png';

const BadgeBack = () => {
  const hardSkills = getHardSkills();

  return (
    <div className='badge-back'>
      <div className='badge-back__image-section'>
        <img src={Me} alt="Luciana Kyoko" />
        <h3 className='badge-back__title'>Skills</h3>
      </div>

      <ul className='badge-back__skill-section'>
        { hardSkills.map((skill) => (
          <li key={skill.id} className='skill'>
            { skill.skill }
          </li>)) }
      </ul>
    </div>
  );
};

export default BadgeBack;