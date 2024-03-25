import React from 'react';
import Faqhero from "../components/faqhero/Faqhero";
import Faqsection from "../components/faqsection/Faqsection";
import styles from "../faq/faq.module.css";


const page = () => {
  return (
    <div className={styles.container}> 
      <Faqhero/>
      <Faqsection/>
    </div>
  )
}

export default page