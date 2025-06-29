import { useState } from "react"
import styles from "./ContactPage.module.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll contact you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you! Reach out for reservations, questions,
            or feedback.
          </p>
        </div>
      </section>

      <div className={styles.container}>
        <section className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#D97706"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <h3>Our Location</h3>
            <p>
              Manjeera Pipeline Rd, RTC Colony, Chanda Nagar, Hyderabad, Telangana 500050.
            </p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#D97706"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <h3>Email Us</h3>
            <p>
              info@familyrestaurant.com
              <br />
              reservations@familyrestaurant.com
            </p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#D97706"
              >
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
            </div>
            <h3>Call Us</h3>
            <p>
              Reservations: 7412365890
              <br />
              General Inquiries: 7412365890
            </p>
          </div>
        </section>

        <section className={styles.contactGrid}>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.348477732173!2d78.3364235!3d17.4908708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb936b4209e521%3A0xdd39fa44dd9df340!2sSwamrutham%20Family%20Restaurant!5e0!3m2!1sen!2sin!4v1751204217742!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            ></iframe>
          </div>

          <div className={styles.formContainer}>
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="feedback">Feedback/Suggestion</option>
                  <option value="private-event">Private Events</option>
                  <option value="employment">Employment Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </section>

        <section className={styles.hours}>
          <h2>Opening Hours</h2>
          <div className={styles.hoursGrid}>
            <div className={styles.day}>
              <span>Monday - Thursday</span>
              <span>11:00 AM - 10:00 PM</span>
            </div>
            <div className={styles.day}>
              <span>Friday - Saturday</span>
              <span>11:00 AM - 11:00 PM</span>
            </div>
            <div className={styles.day}>
              <span>Sunday</span>
              <span>10:00 AM - 9:00 PM</span>
            </div>
          </div>
          <p className={styles.note}>
            * Kitchen closes 30 minutes before closing time
          </p>
        </section>
      </div>
    </div>
  )
}

export default ContactPage
