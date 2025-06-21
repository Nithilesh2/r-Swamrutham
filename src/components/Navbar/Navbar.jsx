import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}></span>
        </button>

        <Link to="/" className={styles.logo}>
          Swamrutham
        </Link>

        <div className={styles.links}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/menu" className={styles.link}>Menu</Link>
          <Link to="/about" className={styles.link}>About</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </div>

        <div className={`${styles.mobileLinks} ${mobileMenuOpen ? styles.open : ''}`}>
          <Link to="/" className={styles.mobileLink} onClick={toggleMobileMenu}>Home</Link>
          <Link to="/menu" className={styles.mobileLink} onClick={toggleMobileMenu}>Menu</Link>
          <Link to="/about" className={styles.mobileLink} onClick={toggleMobileMenu}>About</Link>
          <Link to="/contact" className={styles.mobileLink} onClick={toggleMobileMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;