import React from 'react';
import styles from "./blogPage.module.css"
import Image from 'next/image';

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
      <div className={styles.imageContainer}>
          <Image src="/farmers.jpg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.text}>
        <div className={styles.title}>
          <h1>Profiles of Successful Young Farmers in South Africa</h1>
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
        Despite limited resources, these inspiring entrepreneurs found innovative ways to start and grow agricultural businesses in South Africa. Agriculture is a challenging industry for new entrants, but these determined individuals overcame the odds through hard work, creativity, and passion. Their stories showcase the potential of young farmers to drive growth and opportunity in South Africa.
        </p>
        <h2 className={styles.subhead}>
        Khanyisile Plaatjie: A Beacon of Resilience
        </h2>
        <p className={styles.para}>
        Khanyisile Plaatjie radiates resilience like the brilliant morning sun rising over the rolling hills of North West province. As a young communal farmer nurturing her livestock on 82 hectares of ancestral land, she encountered heartbreaking adversity in 2022. Theft ravaged her herds of Simbra cross cattle, goats, and sheep, stealing not just capital but a piece of Khanyisile's spirit.
        </p>
        <p className={styles.para}>
        Yet like the endless Kalahari sand dunes weathered by wind and time, Khanyisile's passion could not be eroded. Bolstered by her family's unwavering support and her own iron will, she persevered through loss to continue building her agricultural enterprise. Her ambition now turns to the future, where she hopes to expand her farm's productivity and diversity while motivating other young people to embrace farming. 
        </p>
        <p className={styles.para}>
        For the enrichment of community and the preservation of a treasured way of life, Khanyisile nurtures the land - and her own fortitude - with wisdom beyond her years. She stands as a beacon of resilience, shining light on the path ahead for her people.
        </p>
        <h2 className={styles.subhead}>
        Mphoke Makwala: Broiler Guru and YouTube Sensation
        </h2>
        <p className={styles.para}>
        Mphoke Makwala's story is an inspirational one of entrepreneurial success and the power of knowledge-sharing. He began with just a one-hectare plot of land in rural Limpopo, South Africa, but through hard work, dedication, and business savvy, Mphoke transformed it into a thriving broiler chicken operation.
        </p>
        <p className={styles.para}>
        Key to his success was recognizing the rapid market turnover and profit potential of broiler chickens compared to egg layers or indigenous breeds. Broilers reach maturity and market weight in just 6-8 weeks, allowing multiple cycles of chicks to be raised over a single year. Mphoke capitalized on this swift return rate to generate consistent income from his small farm.
        </p>
        <p className={styles.para}>
        As his broiler business grew, Mphoke was compelled to share his knowledge and experience with others. He started a YouTube channel documenting the ins-and-outs of his broiler operation, from constructing chicken houses to mixing feed rations. 
        </p>
        <p className={styles.para}>
        Mphoke provided practical advice and emphasized the importance of passion, care, and attention to detail when raising broilers. His earnest yet entertaining videos quickly gained over 4,000 subscribers, establishing Mphoke as a YouTube sensation and go-to broiler guru. 
        </p>
        <p className={styles.para}>
        Beyond the limelight, Mphoke found meaning in empowering his rural community with the knowledge needed to lift themselves out of poverty through broiler farming. His story highlights how sharing one's expertise with others not only builds success but also makes a positive difference in people's lives.
        </p>
        <p className={styles.para}>
        Through his swift returns, savvy business practices, and willingness to educate others, Mphoke Makwala has become an inspirational model of an entrepreneur who achieved prosperity and pays it forward.
        </p>
        <h2 className={styles.subhead}>
        Vicky Mhlanga: The Poultry Warrior
        </h2>
        <p className={styles.para}>
        Vicky Mhlanga is a warrior in the poultry industry. Her journey started small, with just 400 chickens on her humble one-hectare farm. But through hard work, perseverance, and an unbreakable spirit, she has grown her flock to a robust 1,500 chickens today. 
        </p>
        <p className={styles.para}>
        This success did not come easy for Vicky. She endured many hardships along the way, including multiple devastating break-ins that threatened her livelihood. Water scarcity also proved a constant challenge, as securing a steady supply for her thirsty chickens was no easy feat. And as her flock grew larger, so too did her operational expenses, which began to take a financial toll. But Vicky refused to back down in the face of adversity. 
        </p>
        <p className={styles.para}>
        Remarkably, she balanced her full-time job as a teacher with farming, exemplifying the essence of a true multi-tasker. While juggling these demanding responsibilities, she also overcame everyday problems like predators snatching her chickens and eggs. But Vicky took each challenge and setback in stride. 
        </p>
        <p className={styles.para}>
        She remains fiercely determined and undeterred, constantly finding innovative solutions to the obstacles that emerge. Her resilience and warrior spirit in the face of hardship is inspiring. Vicky's journey shows that with passion, grit, and a never-give-up attitude, it's possible to steadily expand a small poultry farm into a thriving business. 
        </p>
        <p className={styles.para}>
        She continues nurturing her chickens while empowering her community, showing that poultry farming can indeed change lives when approached with dedication. Vicky is a true hero in her field. 
        </p>
        <h2 className={styles.subhead}>
        Conclusion
        </h2>
        <p className={styles.para}>
        Despite scarce resources, these young farmers found creative solutions to launch and expand their agribusinesses. Their perseverance and entrepreneurial spirit provide an inspirational model for the next generation of South African farmers.
        </p>
        
      </div>
    </div>
  )
}

export default page