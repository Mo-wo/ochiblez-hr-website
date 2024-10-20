'use client'
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import "animate.css";


export const Navbar = () => {
  const [ closeNav, setCloseNav ] = useState<boolean>(false);

  const handleNavClose = () => {
    setCloseNav(!closeNav);
  }

  return (
    <nav className={styles.navContainer}>
      <div className={closeNav ? styles.nav : styles.navClose}>

      <div className={styles.navWrapper}>
      <h1 className={styles.h1}>Shamzbridge HR</h1>
      <div className={styles.menuWrapper} onClick={handleNavClose}>
        <span className={`${closeNav ? styles.line1 : styles.line} ${styles.lineColour}`}></span>
        <span className={closeNav ? styles.line2 : styles.line}></span>
        <span className={closeNav ? styles.line3 : `${styles.line} ${styles.lineColour}`}></span>
      </div>
      </div>

      <ul className={closeNav ? styles.ul : styles.ulClose} onClick={handleNavClose}>
      <li className={styles.li} onClick={handleNavClose}>
          <Link href='#about'>About Us</Link>
        </li>
      <li className={styles.li} onClick={handleNavClose}>
          <Link href='#skills'>Services</Link>
        </li>
        <li className={styles.li} onClick={handleNavClose}>
          <Link href='#projects'>Testimonials</Link>
        </li>
        <li className={styles.li} onClick={handleNavClose}>
          <Link href='#contact'>Contact Us</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};
