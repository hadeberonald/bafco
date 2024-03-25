import React from 'react';
import styles from "../footer/footer.module.css";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}> 
      <div className={styles.text}>
        <h4 className={styles.header}>Contact Details</h4>
        <p className={styles.link}>Phone: 000-000-000</p>
        <p className={styles.link}>E-mail: admin@bafco.co.za</p>
        <p className={styles.link}><Link href="/">www.bafco.co.za </Link></p>
      </div>
      <div className={styles.text}>
        <h4 className={styles.header}>Quick Links</h4>
        <p className={styles.link}><Link href="/blog">Blog</Link></p>
        <p className={styles.link}><Link href="/faq">Frequently Asked Questions</Link></p>
        <p className={styles.link}><Link href="/">Privacy Policy</Link></p>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/logo.png" alt="" fill/>
      </div>
      </div>
      <p className={styles.copyright}>Copyright © 2024 Business Agricultural Finance Consultancy</p>
    </div>
  )
}

export default Footer