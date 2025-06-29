import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero-section" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Swamrutham</h1>
        <p className={styles.subtitle}>Experience the taste of tradition</p>
        <div className={styles.buttons}>
          <Link to="/menu" className={styles.primaryBtn}>
            View Menu
          </Link>
          <Link to="/catering" className={styles.secondaryBtn}>
            Catering
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;