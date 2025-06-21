import styles from "../../components/Catering/Catering.module.css";
import MENU from "../../components/Menu";

const Summary = ({ selections, onBack }) => {
  const PLAN_BASE_PRICES = {
    basic: 300,
    medium: 500,
    premium: 800
  };

  const calculatePerPlate = () => {
    const basePrice = PLAN_BASE_PRICES[selections.plan];
    const serviceCharge = Math.round(basePrice * 0.06);
    return basePrice + serviceCharge;
  };

  const groupItemsByCourse = () => {
    const courses = { starters: [], mains: [], desserts: [] };
    
    selections.items.forEach(item => {
      if (MENU[selections.type].starters.some(i => i.id === item.id)) {
        courses.starters.push(item);
      } else if (MENU[selections.type].mains.some(i => i.id === item.id)) {
        courses.mains.push(item);
      } else if (MENU[selections.type].desserts.some(i => i.id === item.id)) {
        courses.desserts.push(item);
      }
    });
    
    return courses;
  };

  const groupedItems = groupItemsByCourse();
  const perPlate = calculatePerPlate();
  const basePrice = PLAN_BASE_PRICES[selections.plan];
  const serviceCharge = perPlate - basePrice;

  return (
    <div className={styles.summaryContainer}>
      <h2>Step 4: Review Your Order</h2>
      <p className={styles.subtitle}>Please review your selections before confirming</p>
      
      <div className={styles.summaryCard}>
        <h3>
          {selections.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'} - 
          {' '}{selections.plan.charAt(0).toUpperCase() + selections.plan.slice(1)} Package
        </h3>
        
        <div className={styles.selectedItems}>
          <h4>Selected Items ({selections.items.length}):</h4>
          <ul>
            {groupedItems.starters.length > 0 && (
              <>
                <h5>Starters</h5>
                {groupedItems.starters.map(item => (
                  <li key={item.id}>
                    {item.name} <span>₹{item.price}</span>
                  </li>
                ))}
              </>
            )}
            
            {groupedItems.mains.length > 0 && (
              <>
                <h5>Main Courses</h5>
                {groupedItems.mains.map(item => (
                  <li key={item.id}>
                    {item.name} <span>₹{item.price}</span>
                  </li>
                ))}
              </>
            )}
            
            {groupedItems.desserts.length > 0 && (
              <>
                <h5>Desserts</h5>
                {groupedItems.desserts.map(item => (
                  <li key={item.id}>
                    {item.name} <span>₹{item.price}</span>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>

        <div className={styles.priceSummary}>
          <p>Base price per plate: <strong>₹{basePrice}</strong></p>
          <p>Service charge: <strong>₹{serviceCharge}</strong></p>
          <p className={styles.total}>Final price per plate: <strong>₹{perPlate}</strong></p>
          <p className={styles.note}>(Minimum 50 plates required)</p>
          <p className={styles.total}>Estimated total: <strong>₹{perPlate * 50}</strong></p>
        </div>
      </div>

      <div className={styles.navigation} style={{flexDirection: 'column'}}>
        <button onClick={onBack} className={styles.backButton}>
          Modify Selection
        </button>
        <button className={styles.confirmButton}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Summary;