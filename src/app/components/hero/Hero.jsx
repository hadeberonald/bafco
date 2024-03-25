import React from 'react';
import styles from "../hero/hero.module.css";
import Link from 'next/link';


const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
      <h1 className={styles.head}>Welcome</h1>
      </div>
      <div className={styles.text}>
      <p className={styles.para}>We Are Business Agricultural Finance Consultancy, your one-stop-shop for all your business needs.</p>
      <p className={styles.para}>Learn more about the services we offer!</p>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button1}>
        <Link href="/about">About Us</Link>
        </div>
        <div className={styles.button2}>
        <Link href="/faq">FAQs</Link>
        </div>
      </div>
      </div>
    </div>
  )
};

export default Hero;