import styles from "./FeaturedDishes.module.css";

const FeaturedDishes = () => {
  const dishes = [
    {
      id: 1,
      name: "Signature Butter Chicken",
      description: "Tender chicken in our secret creamy tomato sauce",
      price: "₹450",
      image: "/butter-chicken.jpg"
    },
    {
      id: 2,
      name: "Paneer Makhani",
      description: "Cottage cheese in rich buttery gravy",
      price: "₹380",
      image: "/paneer-makhani.jpg"
    },
    {
      id: 3,
      name: "Lamb Biryani",
      description: "Aromatic basmati rice with tender lamb pieces",
      price: "₹550",
      image: "/biryani.jpg"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Our Signature Dishes</h2>
          <p>Chef's special creations that define our culinary excellence</p>
        </div>
        
        <div className={styles.dishes}>
          {dishes.map(dish => (
            <div key={dish.id} className={styles.dishCard}>
              <div className={styles.imageContainer}>
                <img src={dish.image} alt={dish.name} className={styles.image} />
              </div>
              <div className={styles.dishInfo}>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <span>{dish.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;