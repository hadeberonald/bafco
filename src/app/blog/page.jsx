import React from 'react';
import Bloghero from '../components/bloghero/Bloghero';
import Blogsection from '../components/blogsection/Blogsection';
import styles from "./blog.module.css";

const page = () => {
  return (
    <div className={styles.container}>
        <Bloghero/>
        <Blogsection/>
    </div>
  )
}

export default page