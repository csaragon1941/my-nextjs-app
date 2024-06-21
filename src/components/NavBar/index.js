// Import React if you haven't already
import React from 'react';
import styles from './styles.module.css';  // Import the styles

// NavBar component
export function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}> <a href="/">christina aragon</a></div>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/about">about</a></li>
          <li className={styles.navItem}><a href="/projects">projects</a></li>
          <li className={styles.navItem}><a href="/contact">contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
