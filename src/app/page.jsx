import React from 'react';
import styles from "../app/home.module.css";
import Hero from "../app/components/hero/Hero";
import Heromobile from "../app/components/heromobile/Heromobile";
import Services from "../app/components/services/Services";
import Contact from "../app/components/contact/Contact";
import Contactmobile from "../app/components/contactmobile/Contactmobile";


const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
      <Hero/>
      <Heromobile/>
      </div>
      <div className={styles.services}> 
      <Services/>
      <Contact/>
      <Contactmobile/>
      </div>
    </div>
  )
}

export default page