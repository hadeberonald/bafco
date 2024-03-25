import React from 'react';
import styles from "../aboutsection/aboutsection.module.css";
import Image from 'next/image';

const Aboutsection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image src="/mission.png" alt="" fill/>
            </div>
            <div className={styles.textContainer}>
            <h1 className={styles.h1}>
            Our Mission
            </h1>
            <p className={styles.para}>
            Our mission is uplifting business operators in South Africa by equipping them with the needed resources to achieve peak excellence.
            </p>
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image src="/vision.png" alt="" fill/>
            </div>
            <div className={styles.textContainer}>
            <h1 className={styles.h1}>
            Our Vision
            </h1>
            <p className={styles.para}>
            Our vision is becoming the industry-leader in providing business consultation services to businesses in the agricultural sector and other industries.
            </p>
            </div>
        </div>
    </div>
  )
}

export default Aboutsection