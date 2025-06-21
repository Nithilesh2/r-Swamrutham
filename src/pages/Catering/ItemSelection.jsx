import { useState } from "react";
import styles from "../../components/Catering/Catering.module.css";
import MENU from "../../components/Menu";


const ItemSelection = ({ selections, onNext, onBack, updateSelections }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  
  const planLimits = {
    basic: { starters: 2, mains: 2, desserts: 1 },
    medium: { starters: 3, mains: 2, desserts: 2 },
    premium: { starters: 4, mains: 3, desserts: 3 }
  }[selections.plan];
  
  const countByCourse = (course) => {
    return selectedItems.filter(item => 
      MENU[selections.type][course].some(menuItem => menuItem.id === item.id)
    ).length;
  };
  
  const canSelectItem = (item) => {
    const course = Object.keys(MENU[selections.type]).find(course => 
      MENU[selections.type][course].some(menuItem => menuItem.id === item.id)
    );
    
    const currentCount = countByCourse(course);
    const isSelected = selectedItems.some(i => i.id === item.id);
    
    if (isSelected) return true;
    return currentCount < planLimits[course];
  };

  const toggleItem = (item) => {
    if (!canSelectItem(item)) return;
    
    setSelectedItems(prev => 
      prev.some(i => i.id === item.id)
        ? prev.filter(i => i.id !== item.id)
        : [...prev, item]
    );
  };

  const handleSubmit = () => {
    updateSelections("items", selectedItems);
    onNext();
  };

  return (
    <div className={styles.selectionContainer}>
      <h2>Step 3: Customize Your Menu</h2>
      <p className={styles.subtitle}>Select items for each course (limits apply based on your plan)</p>
      
      {Object.entries(MENU[selections.type]).map(([course, items]) => (
        <div key={course} className={styles.courseSection}>
          <h3>
            {course.charAt(0).toUpperCase() + course.slice(1)} 
            <span className={styles.counter}>
              {countByCourse(course)}/{planLimits[course]}
            </span>
          </h3>
          {countByCourse(course) >= planLimits[course] && (
            <p className={styles.selectionLimit}>
              You've reached the maximum selections for {course}
            </p>
          )}
          <div className={styles.itemGrid}>
            {items.map(item => (
              <div 
                key={item.id}
                className={`${styles.itemCard} ${
                  selectedItems.some(i => i.id === item.id) ? styles.selected : ""
                } ${
                  !canSelectItem(item) && !selectedItems.some(i => i.id === item.id) ? styles.disabled : ""
                }`}
                onClick={() => toggleItem(item)}
              >
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <div>
                  {item.tags.map(tag => (
                    <span key={tag} className={`${styles.tag} ${styles[tag]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className={styles.price}>₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className={styles.navigation}>
        <button onClick={onBack} className={styles.backButton}>
          Back
        </button>
        <button 
          onClick={handleSubmit}
          disabled={selectedItems.length === 0}
          className={styles.nextButton}
        >
          Review Order
        </button>
      </div>
    </div>
  );
};

export default ItemSelection;