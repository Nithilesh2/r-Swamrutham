import styles from "./AvailableOn.module.css"
import swiggy from "../../assets/swiggy.png"
import zomato from "../../assets/zomato-removebg.png"

const AvailableOn = () => {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.orderNow}>Order Now</h2>
        <div className={styles.logosContainer}>
          <img src={swiggy} className={styles.logos} alt="swiggy logo" />
          <img src={zomato} className={styles.logos} alt="zomato logo" />
        </div>
      </div>
    </>
  )
}

export default AvailableOn
