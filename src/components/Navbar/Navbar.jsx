import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import styles from "./Navbar.module.css"
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        const heroSection = document.getElementById("hero-section")
        if (heroSection) {
          const heroHeight = heroSection.offsetHeight
          const shouldShow = window.scrollY > heroHeight - 100
          setScrolled(shouldShow)
          setIsVisible(shouldShow)
        }
      } else {
        const shouldShow = window.scrollY > 10
        setScrolled(shouldShow)
        setIsVisible(true)
      }
      setIsInitialLoad(false)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location])

  if (isInitialLoad && location.pathname === "/" && !scrolled) {
    return null
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.container}>
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`${styles.hamburger} ${
              mobileMenuOpen ? styles.open : ""
            }`}
          ></span>
        </button>

        <Link to="/" className={styles.logo}>
          Swamrutham
          <img src={logo} alt="Logo" className={styles.logoImg} />
        </Link>

        <div className={styles.links}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/menu" className={styles.link}>
            Menu
          </Link>
          <Link to="/gallery" className={styles.link}>
            Gallery
          </Link>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </div>

        <div
          className={`${styles.mobileLinks} ${
            mobileMenuOpen ? styles.open : ""
          }`}
        >
          <Link to="/" className={styles.mobileLink} onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link
            to="/menu"
            className={styles.mobileLink}
            onClick={toggleMobileMenu}
          >
            Menu
          </Link>
          <Link
            to="/gallery"
            className={styles.mobileLink}
            onClick={toggleMobileMenu}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className={styles.mobileLink}
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
