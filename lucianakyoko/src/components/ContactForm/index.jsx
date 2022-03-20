import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from '../Button';

import './style.scss';
import emailjs from 'emailjs-com';


const ContactForm = () => {
  function sendEmail(event) {
    event.preventDefault();

    emailjs
    .sendForm('service_nc66yny', 'template_056ce4k', event.target, 'W-mMediDf1ExEvTv7')
  }

  return (
    <form className='form' onSubmit={sendEmail}>
      <Input type="text" label="*Nome:" id="name" name='name' required/>
      <Input type="text" label="*E-mail:" id="email" name='email' required/>
      <Textarea label="*Mensagem:" id="message" name='message' required/>
 
      <Button icon='fas fa-paper-plane' btnName='Enviar mensagem' title='Enviar mensagem'/> 
    </form>
  )
}

export default ContactForm;