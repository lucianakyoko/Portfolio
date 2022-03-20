import React, { useEffect } from 'react';
import RetroBackground from '../../RetroBackground';
import './style.scss';

const SentMessage = () => {
  return (
    <div className='sent-message'>
      <div className='message-box'>
        <p className='message-success'>Sua mensagem foi enviada!</p>
        <p className='message'>Responderei o mais breve possível.</p>
      </div>
      <RetroBackground />
    </div>
  )
}

export default SentMessage;