"use client"

import styles from "../contact/contact.module.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_db19nbl', 'template_i349fl7', form.current, {
        publicKey: 'iqUgZ-Zrr6MhMCDbV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
  <div className={styles.container}>
    <div className={styles.header}><h2>Contact Us</h2></div>
  <div className={styles.wrapper}>
    <div className={styles.form}>
<form ref={form} onSubmit={sendEmail}>
      <div className={styles.input}>
      <label>Name</label>
      
      <input type="text" name="user_name" className={styles.field} />
      
      </div>
      <div className={styles.input}>
      <label>Email</label>     
      
      <input type="email" name="user_email" className={styles.field}/>
     
      </div>
      <div className={styles.input}>
      <label>Message</label>
      <textarea name="message" rows={12} className={styles.fieldT}/>
      </div>
      <input type="submit" value="Send" className={styles.button}/>
    </form>
    </div>
    </div>
  </div>
  );

};
  

export default Contact;



