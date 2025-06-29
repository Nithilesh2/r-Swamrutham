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
        Reserve Table
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.title}>Make a Reservation</h3>
              <button 
                onClick={() => setIsOpen(false)} 
                className={styles.closeButton}
                aria-label="Close reservation form"
              >
                ✕
              </button>
            </div>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Prakash Kumar" 
                  className={styles.input} 
                  required 
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="prakash@gmail.com" 
                  className={styles.input} 
                  required 
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="9874563210" 
                  className={styles.input} 
                  required
                  maxLength={10}
                />
              </div>
              
              <div className={styles.dateTimeContainer}>
                <div className={styles.inputGroup}>
                  <label htmlFor="date" className={styles.label}>Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    className={styles.input} 
                    required 
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="time" className={styles.label}>Time</label>
                  <input 
                    type="time" 
                    id="time" 
                    className={styles.input} 
                    required 
                  />
                </div>
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="guests" className={styles.label}>Number of Guests</label>
                <select id="guests" className={styles.input} required>
                  <option value="">Select guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>
              
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