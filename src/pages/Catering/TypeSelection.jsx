import styles from "../../components/Catering/Catering.module.css"

const TypeSelection = ({ onNext, updateSelections, selectedType }) => {
  const handleSelect = (type) => {
    updateSelections("type", type)
  }

  const handleSubmit = () => {
    if (selectedType) onNext()
  }

  return (
    <div className={styles.selectionContainer}>
      <h2>Step 1: Select Meal Type</h2>
      <p className={styles.subtitle}>Choose the type of cuisine you prefer</p>

      <div className={styles.options}>
        <button
          className={`${styles.optionCard} ${styles.veg} ${
            selectedType === "veg" ? styles.selected : ""
          }`}
          onClick={() => handleSelect("veg")}
        >
          <h3>Vegetarian</h3>
          <p>
            A delightful selection of plant-based dishes featuring fresh
            vegetables, dairy, and plant proteins
          </p>
          <div className={styles.tag}>Vegetarian</div>
        </button>

        <button
          className={`${styles.optionCard} ${styles.nonveg} ${
            selectedType === "non-veg" ? styles.selected : ""
          }`}
          onClick={() => handleSelect("non-veg")}
        >
          <h3>Non-Vegetarian</h3>
          <p>
            Premium selection featuring chicken, lamb, seafood, and other meat
            options
          </p>
          <div className={styles.tag}>Non-Veg</div>
        </button>
      </div>

      <div className={styles.navigation}>
        <button
          onClick={handleSubmit}
          disabled={!selectedType}
          className={styles.nextButton}
        >
          Next: Select Plan
        </button>
      </div>
    </div>
  )
}

export default TypeSelection
