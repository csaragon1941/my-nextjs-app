import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

// Projects component
export function ProjectsList() {
  return (
    <div className={styles.projectcontainer}>
    
      {/* EBT Project */}
      <div className={styles.projectWrapper}>
        <div className={styles.projectText}>
          <h1 className={styles.project}>
            Economic Benefit Program
          </h1>
          <h2 className={styles.description}>
            The objective of the project was to begin efforts in the modernization of Benefit Programs.
          </h2>
          <Link href="/projects/ebt">
            <p className={styles.info}> Learn More About EBT </p>
          </Link>
        </div>
        <img className={styles.projectimage} src="proj1.jpeg" alt="Project Image" />
      </div>

      {/* Alpha Chi App */}
      <div className={styles.projectWrapper}>
        <img className={styles.projectimage} src="proj1.jpeg" alt="Project Image" />
        <div className={styles.projectText}>
          <h1 className={styles.project}>
            Group Management Application
          </h1>
          <h2 className={styles.description}>
            Made for University organizations
          </h2>
          <Link href="/projects/axo">
            <p className={styles.info}> Learn More About AXO </p>
          </Link>
        </div>
      </div>

      {/* Mars Rover */}
      <div className={styles.projectWrapper}>
      <div className={styles.projectText}>
          <h1 className={styles.project}>
            Mars Rover: Image Processing
          </h1>
          <h2 className={styles.description}>
            The objective of the project was to begin efforts in the modernization of Benefit Programs.
          </h2>
          <Link href="/projects/mars">
            <p className={styles.info}> Learn More About the Rovers </p>
          </Link>
        </div>
        <img className={styles.projectimage} src="proj1.jpeg" alt="Project Image" />
      </div>

      {/* Discord Bot */}
      <div className={styles.projectWrapper}>
        <img className={styles.projectimage} src="proj1.jpeg" alt="Project Image" />
        <div className={styles.projectText}>
          <h1 className={styles.project}>
            Economic Benefit Program
          </h1>
          <h2 className={styles.description}>
            The objective of the project was to begin efforts in the modernization of Benefit Programs.
          </h2>
          <Link href="/projects/discord">
            <p className={styles.info}> Learn More About EBT </p>
          </Link>
        </div>
      </div>

    </div>
  );
}
