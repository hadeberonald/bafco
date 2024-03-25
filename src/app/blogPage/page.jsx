import React from 'react';
import styles from "./blogPage.module.css"
import Image from 'next/image';

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
      <div className={styles.imageContainer}>
          <Image src="/hero.png" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.text}>
        <div className={styles.title}>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, corrupti?</h1>
        </div>
        <p className={styles.posted}>
              Posted by:
            </p>
        <div className={styles.detail}>
          <div className={styles.userImg}>
            <Image src="/user.png" alt="" fill className={styles.img}/>
          </div>
          <div className={styles.textDetail}>
            
            <p className={styles.name}>
              BAFCO
            </p>
            <p className={styles.date}>
              25 March 2024
            </p>
          </div>
        </div>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cum sequi pariatur cumque? Impedit sapiente fugit, pariatur atque reprehenderit rerum quia nam quisquam, cupiditate a quam velit delectus excepturi minima et tenetur harum iure vitae est unde incidunt eum perspiciatis ipsum quod? Deserunt harum corporis cupiditate quibusdam molestias non velit soluta vitae quaerat animi consectetur voluptas, voluptatibus consequatur exercitationem tempore? Possimus suscipit iure cumque eligendi corrupti perspiciatis ex optio tenetur?
        </p>
        <h2 className={styles.subhead}>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, tempore.
        </h2>
        <p className={styles.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cum sequi pariatur cumque? Impedit sapiente fugit, pariatur atque reprehenderit rerum quia nam quisquam, cupiditate a quam velit delectus excepturi minima et tenetur harum iure vitae est unde incidunt eum perspiciatis ipsum quod? Deserunt harum corporis cupiditate quibusdam molestias non velit soluta vitae quaerat animi consectetur voluptas, voluptatibus consequatur exercitationem tempore? Possimus suscipit iure cumque eligendi corrupti perspiciatis ex optio tenetur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cum sequi pariatur cumque? Impedit sapiente fugit, pariatur atque reprehenderit rerum quia nam quisquam, cupiditate a quam velit delectus excepturi minima et tenetur harum iure vitae est unde incidunt eum perspiciatis ipsum quod? Deserunt harum corporis cupiditate quibusdam molestias non velit soluta vitae quaerat animi consectetur voluptas, voluptatibus consequatur exercitationem tempore? Possimus suscipit iure cumque eligendi corrupti perspiciatis ex optio tenetur?
        </p>
      </div>
    </div>
  )
}

export default page