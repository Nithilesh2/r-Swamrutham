import styles from "../../components/Catering/Catering.module.css";

const PLANS = {
  basic: {
    name: "Basic",
    price: "₹300/plate",
    includes: "2 starters, 2 mains, 1 dessert",
    description: "Perfect for casual gatherings and small events",
    limits: {
      starters: 2,
      mains: 2,
      desserts: 1
    }
  },
  medium: {
    name: "Medium",
    price: "₹500/plate",
    includes: "3 starters, 2 mains, 2 desserts",
    description: "Great for medium-sized events with diverse preferences",
    limits: {
      starters: 3,
      mains: 2,
      desserts: 2
    }
  },
  premium: {
    name: "Premium",
    price: "₹800/plate",
    includes: "4 starters, 3 mains, 3 desserts",
    description: "Our most comprehensive package for special occasions",
    limits: {
      starters: 4,
      mains: 3,
      desserts: 3
    }
  }
};

const PlanSelection = ({ onNext, onBack, updateSelections, selectedPlan }) => {
  const handleSelect = (plan) => {
    updateSelections("plan", plan);
  };

  const handleSubmit = () => {
    if (selectedPlan) onNext();
  };

  return (
    <div className={styles.selectionContainer}>
      <h2>Step 2: Select Your Plan</h2>
      <p className={styles.subtitle}>Choose the package that fits your needs</p>
      
      <div className={styles.options}>
        {Object.entries(PLANS).map(([key, plan]) => (
          <div 
            key={key}
            className={`${styles.planCard} ${selectedPlan === key ? styles.selected : ""}`}
            onClick={() => handleSelect(key)}
          >
            <h3>{plan.name}</h3>
            <p className={styles.price}>{plan.price}</p>
            <p>{plan.includes}</p>
            <p className={styles.description}>{plan.description}</p>
          </div>
        ))}
      </div>
      
      <div className={styles.navigation}>
        <button onClick={onBack} className={styles.backButton}>
          Back
        </button>
        <button 
          onClick={handleSubmit}
          disabled={!selectedPlan}
          className={styles.nextButton}
        >
          Next: Customize Menu
        </button>
      </div>
    </div>
  );
};

export default PlanSelection;