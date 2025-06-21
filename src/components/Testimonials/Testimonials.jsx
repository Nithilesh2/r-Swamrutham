import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The best dining experience I've had this year! The flavors were incredible.",
      author: "Rahul Sharma",
      role: "Food Critic"
    },
    {
      id: 2,
      quote: "Perfect for our anniversary dinner. Impeccable service and amazing food.",
      author: "Priya Patel",
      role: "Regular Customer"
    },
    {
      id: 3,
      quote: "Their catering service made our wedding unforgettable. Everyone loved the food!",
      author: "Amit & Neha",
      role: "Newlyweds"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>What Our Guests Say</h2>
        <div className={styles.testimonials}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.card}>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <div className={styles.author}>
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;