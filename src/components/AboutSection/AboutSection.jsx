import styles from "./AboutSection.module.css"
import restaurant from "../../assets/Restaurant/IMG-20250629-WA0043.jpg"

const AboutSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Our Story</h2>
          <p>
            Founded in 2025, our restaurant has been serving authentic flavors
            passed down through generations.
          </p>
          <p>
            We source only the freshest ingredients and prepare each dish with
            the same love and care as we would for our own family.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={restaurant} alt="Restaurant interior" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
