// index.js

import React from 'react';
import styles from './styles.module.css'; // Import the styles

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Christina Aragon</h1>
      <h2 className={styles.description}>Software Engineer</h2>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/christina-aragon11/" target="_blank" rel="noopener noreferrer">
          <img src="icon-vector/LI-white.svg" alt="LI Logo" className={styles.icon} />
        </a>
        <a href="https://github.com/csaragon1941" target="_blank" rel="noopener noreferrer">
          <img src="icon-vector/github-white.svg" alt="GitHub Logo" className={styles.icon} />
        </a>
        <a href="https://www.behance.net/christinaaragon3" target="_blank" rel="noopener noreferrer">
          <img src="icon-vector/BH-white.svg" alt="BH Logo" className={styles.icon} />
        </a>
      </div>
    </header>
  );
}
