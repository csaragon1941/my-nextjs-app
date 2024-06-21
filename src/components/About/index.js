import React from "react";
import styles from "./style.module.css";

export default function AboutMe() {
  return (
    <div className={styles["parent-container"]}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2>Certifications</h2>
          <p>SAFe® 5 Product Owner/Product Manager SAFe® 6 PO/PM Upgrade certification.</p>
        </div>
        
        <div className={styles.section}>
          <h2>About Me</h2>
          <p>SAFe® 5 Product Owner/Product Manager SAFe® 6 PO/PM Upgrade certification.</p>
        </div>
        
        <div className={styles.section}>
          <h2>Hobbies</h2>
          <p>I like to partake in many different types of things - recently I have been getting back into video games, baking, air dry clay, and thrifting for decor.</p>
        </div>
      </div>
    </div>
  );
}
