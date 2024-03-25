import React from 'react';
import Image from "next/image";
import styles from "../faqhero/faqhero.module.css";

const Faqhero = () => {
  return (
    <div>
         <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1 className={styles.h1}>Frequently Asked Questions</h1>
            <p className={styles.para}>Do you have a question about BAFCO or any of the services we provide?</p>
            <p className={styles.para}>Check out our list of frequently asked questions!</p>
        </div>
        <div className={styles.imageContainer}>
            <Image src="/faq.png" alt="" fill className={styles.image}/>
        </div>
    </div>
    </div>
  )
}

export default Faqhero