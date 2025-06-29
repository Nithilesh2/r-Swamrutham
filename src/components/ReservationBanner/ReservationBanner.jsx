import ReservationForm from "../ReservationForm/ReservationForm"
import styles from "./ReservationBanner.module.css"
import { Link } from "react-router-dom"

const ReservationBanner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Ready to Experience Our Cuisine?</h2>
        <p>
          Book your table today and prepare for a memorable dining experience.
          We also offer private dining options for special occasions.
        </p>
        <ReservationForm />
      </div>
    </section>
  )
}

export default ReservationBanner
