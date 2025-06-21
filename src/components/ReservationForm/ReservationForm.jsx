import { useState } from "react";
import styles from "./ReservationForm.module.css";

const ReservationForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={styles.reserveButton}
      >
        Reserve a Seat
      </button>

      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Make a Reservation</h2>
              <button onClick={() => setIsOpen(false)} className={styles.closeButton}>✕</button>
            </div>
            <form className={styles.form}>
              <input type="text" placeholder="Name" className={styles.input} />
              <input type="email" placeholder="Email" className={styles.input} />
              <input type="tel" placeholder="Phone" className={styles.input} />
              <input type="date" className={styles.input} />
              <input type="time" className={styles.input} />
              <select className={styles.input}>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>4 Guests</option>
                <option>6+ Guests</option>
              </select>
              <button type="submit" className={styles.submitButton}>
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationForm;