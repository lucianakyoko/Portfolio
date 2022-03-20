import React from 'react';
import SocialIcons from '../../components/SocialIcons';
import Header from '../../components/Header';
import ContactForm from '../../components/ContactForm';

import './style.scss';

const Contact = () => {
  return (
    <main className='contact-page'>
      <Header pageName='Contato'/>
      <div className='contact__container'>
        <section className="contact__social">
          <p className="contact__paragraph">Você também pode me encontrar aqui ó:</p>
          <SocialIcons />
        </section>
        
        <section className='contact__form'>
          <ContactForm />
        </section>
      </div>
    </main>
  );
};

export default Contact;