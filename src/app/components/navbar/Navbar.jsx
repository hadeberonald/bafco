import React from 'react';
import styles from "../navbar/navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
        <Image src="/logo.png" alt="" fill/>
        </div>
        <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQs</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar