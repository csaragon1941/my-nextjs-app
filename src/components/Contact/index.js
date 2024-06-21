import React from 'react';
import styles from './style.module.css';
import Link from 'next/link';

// Projects component
// Header component
export function Contact() {
    return (
      <header className={styles.header}>
        <h1 className={styles.logo}>Your Logo</h1>
        {/* Additional header content goes here */}
      </header>
    );
  }