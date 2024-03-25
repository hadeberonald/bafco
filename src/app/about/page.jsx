import React from 'react';
import Abouthero from "../components/abouthero/Abouthero";
import Aboutsection from "../components/aboutsection/Aboutsection";
import Contact from '../components/contact/Contact';
import Contactmobile from '../components/contactmobile/Contactmobile';
import styles from "./about.module.css"

const page = () => {
  return (
    <div className={styles.container}>
        <Abouthero/>
        <Aboutsection/>
        <Contact/>
        <Contactmobile/>
    </div>
  )
}

export default page