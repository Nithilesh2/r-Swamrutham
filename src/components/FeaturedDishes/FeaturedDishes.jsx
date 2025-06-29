import styles from "./FeaturedDishes.module.css"
import f1 from "../../assets/Food/chicken-fry-piece-biryani.jpg"
import f2 from "../../assets/Food/veg-noodles.jpg"
import f3 from "../../assets/Food/manchuriyan.png"

const FeaturedDishes = () => {
  const dishes = [
    {
      id: 1,
      name: "Veg Manchuriyan",
      description:
        "Manchuriyan is tasty, not totally crispy or spongy — it's soft, easy to eat, and mildly spiced (not too spicy, but not bland either).",
      price: "₹380",
      image: f3,
    },
    {
      id: 2,
      name: "Chicken Fry Piece Biryani",
      description: "Flavorful biryani served with juicy chicken fry pieces",
      price: "₹490",
      image: f1,
    },
    {
      id: 3,
      name: "Vegetable Noodles",
      description: "Stir-fried noodles with fresh vegetables and sauces",
      price: "₹270",
      image: f2,
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Our Signature Dishes</h2>
          <p>Chef's special creations that define our culinary excellence</p>
        </div>

        <div className={styles.dishes}>
          {dishes.map((dish) => (
            <div key={dish.id} className={styles.dishCard}>
              <div className={styles.imageContainer}>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className={styles.image}
                />
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
  )
}

export default FeaturedDishes
