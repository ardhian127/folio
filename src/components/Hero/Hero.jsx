import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ardhian</h1>
        <p className={styles.description}>
        "A student from Politeknik Pratama Mulia Surakarta, majoring in Informatics Management, is currently undertaking Studi Independen at Kampus Merdeka through Educourse.id on the Platform & Web Developer Specialist Education Platform. I am enthusiastic about enhancing my skills and knowledge in web development, integrating my technical expertise with a deep understanding of programming especially in frontend."
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="https://docs.google.com/document/d/1qohcIOc1pN5uexhhBmXxj9fdfBgdMctx/edit?usp=sharing&ouid=101409742564644456807&rtpof=true&sd=true" className={styles.contactBtn}>
          My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/PotretDiri.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
