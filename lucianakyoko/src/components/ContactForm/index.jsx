import React, { useState } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from '../Button';
import SentMessage from './SentMessage';

import './style.scss';
import emailjs from 'emailjs-com';


const ContactForm = () => {
  const [result, setResult] = useState(false);

  function sendEmail(event) {
    event.preventDefault();

    emailjs
    .sendForm('service_nc66yny', 'template_056ce4k', event.target, 'W-mMediDf1ExEvTv7')
    // .then(result => console.log(result), (error) => console.log(error, error.text));

    event.target.reset();
    setResult(true);
  }

  return (
    <form className='form' onSubmit={sendEmail}>
      <Input type="text" label="*Nome:" id="name" name='name' required/>
      <Input type="text" label="*E-mail:" id="email" name='email' required/>
      <Textarea label="*Mensagem:" id="message" name='message' required/>
 
      <Button icon='fas fa-paper-plane' btnName='Enviar mensagem' title='Enviar mensagem'/> 

      { result ? <SentMessage /> : null }
    </form>
  )
}

export default ContactForm;