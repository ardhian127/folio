import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Click the icon to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:ardhianjayawibawa@email.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/></a>
          
        </li>
        <li className={styles.link}>
        <a href="https://www.linkedin.com/in/ardhian-jaya-wibawa"><img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          /> </a>
          
        </li>
        <li className={styles.link}>
        <a href="https://www.github.com/ardhian127"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
        </a>
        </li>
      </ul>
    </footer>
  );
};
