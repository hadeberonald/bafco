import React from 'react';
import styles from "../abouthero/abouthero.module.css";
import Image from 'next/image';

const Abouthero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1 className={styles.h1}>Get to know us better</h1>
            <p className={styles.para}>At BAFCO, we capitalize on grant funding from government instituitions, Non-Profit Organizations, and all commercial banks</p>
            <p className={styles.para}>However, BAFCO extends further than kickstarting agricultural businesses.</p>
            <p className={styles.para}>Get to know our mission and vision!</p>
        </div>
        <div className={styles.imageContainer}>
            <Image src="/about.png" alt="" fill className={styles.image}/>
        </div>
    </div>
  )
}

export default Abouthero