import styles from "./AvailableOn.module.css"
import swiggy from "../../assets/swiggy.png"
import zomato from "../../assets/zomato-removebg.png"

const AvailableOn = () => {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.orderNow}>Available On</h2>
        <div className={styles.logosContainer}>
          <a
            href="https://www.swiggy.com/city/hyderabad/swamrutham-family-restaurant-miyapur-rest1099511"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={swiggy} className={styles.logos} alt="Swiggy logo" />
          </a>
          <a
            href="https://www.zomato.com/hyderabad/swamrutham-family-restaurant-chanda-nagar/order"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={zomato} className={styles.logos} alt="Zomato logo" />
          </a>
        </div>
      </div>
    </>
  )
}

export default AvailableOn
