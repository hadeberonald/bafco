import React from 'react';
import styles from "../services/services.module.css";
import Image from 'next/image';

const Services = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Our Services</h2>
      <div className={styles.section}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/finance.png" alt="" fill/>
        </div>
        <div className={styles.text}> 
        <h3 className={styles.h3}>Business Finance</h3>
        <p className={styles.para}>At BAFCO we provide business and agricultural finance solutions through our diversified network of financial consultants with extensive experience in this field.</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/other.png" alt="" fill/>
        </div>
        <div className={styles.text}> 
        <h3 className={styles.h3}>Business Planning</h3>
        <p className={styles.para}>Business planning is a crucial element for securing business finance and profitable business operations. We have vast experience in brainstorming, documenting and presenting Business Plans.</p>
        </div>
      </div>
      </div>
      <div className={styles.section}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/cashflow.png" alt="" fill/>
        </div>
        <div className={styles.text}> 
        <h3 className={styles.h3}>Cashflow Forecasting</h3>
        <p className={styles.para}>Among the array of financial planning services we provide at BAFCO, we also generate cashflow forecasts parallel with historical sales and/or your current business plan.</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/business.png" alt="" fill/>
        </div>
        <div className={styles.text}> 
        <h3 className={styles.h3}>Other Services</h3>
        <p className={styles.para}>
          We can get your business sorted with:
        </p>
        <div className={styles.list}>
          <ul>
            <li>Company registration with CIPC</li>
            <li>SARS Tax and VAT Registration</li>
            <li>Filing SARS & CIPC Annual Returns</li>
            <li>Website Design & Development</li>
          </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Services