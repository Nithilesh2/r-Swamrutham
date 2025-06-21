import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Our Story</h2>
          <p>
            Founded in 1995, our restaurant has been serving authentic flavors 
            passed down through generations. What started as a small family kitchen 
            has grown into a beloved culinary destination.
          </p>
          <p>
            We source only the freshest ingredients and prepare each dish with 
            the same love and care as we would for our own family.
          </p>
          <button className={styles.button}>Meet Our Chefs</button>
        </div>
        <div className={styles.imageContainer}>
          <img src="/restaurant-interior.jpg" alt="Restaurant interior" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;