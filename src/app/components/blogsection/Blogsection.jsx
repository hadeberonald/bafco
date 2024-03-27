import React from 'react';
import styles from "../blogsection/blogsection.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Blogsection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Latest Updates</h2>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/nyda.png" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <h3>Does NYDA fund agriculture businesses?</h3>
            </div>
          <div className={styles.desc}>
            <p>The NYDA was established by the South African government in 2009 to provide financial and business support services to young people aged 14-35 to address the high level of youth unemployment.
            The NYDA's flagship program is a grant program that provides young entrepreneurs with money to cover start-up costs such as equipment, rent, licenses and inventory, as well as mentoring and training to successfully launch and grow their business.</p>
            </div>
          <div className={styles.button}>
            <Link href="/blog/does-nyda-fund-agriculture-businesses">Read More</Link>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/farmers.png" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <h3>Profiles of Successful Young Farmers in South Africa</h3>
            </div>
          <div className={styles.desc}>
            <p>Despite limited resources, these inspiring entrepreneurs found innovative ways to start and grow agricultural businesses in South Africa. Agriculture is a challenging industry for new entrants, but these determined individuals overcame the odds through hard work, creativity, and passion.</p>
            </div>
          <div className={styles.button}>
            <Link href="/blog/profiles-of-successful-young-farmers-in-south-africa">Read More</Link>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/farm.png" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <h3>How to Finance Your Small Farm in South Africa</h3>
            </div>
          <div className={styles.desc}>
            <p>Starting and running a small farm in South Africa can be both rewarding and challenging. One of the key hurdles faced by aspiring farmers is securing the necessary capital to kickstart their agricultural ventures. In this guide, we delve into various financing options available to small-scale farmers, considering their unique circumstances and limited resources</p>
            </div>
          <div className={styles.button}>
            <Link href="/blog/how-to-finance-your-small-farm-in-south-africa">Read More</Link>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/farmfinance.png" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <h3>The Future of Agricultural Finance in South Africa</h3>
            </div>
          <div className={styles.desc}>
            <p>Smallholder farmers in South Africa face immense challenges in securing the financing they need to grow and develop their farms. With limited collateral, sparse credit histories, and often unreliable cash flows, traditional banks view these farmers as too high-risk to extend loans.</p>
            </div>
          <div className={styles.button}>
            <Link href="/blog/the-future-of-agricultural-finance-in-south-africa">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogsection