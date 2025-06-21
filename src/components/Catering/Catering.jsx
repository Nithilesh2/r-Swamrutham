import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Catering.module.css";
import TypeSelection from './../../pages/Catering/TypeSelection';
import PlanSelection from './../../pages/Catering/PlanSelection';
import ItemSelection from './../../pages/Catering/ItemSelection';
import Summary from './../../pages/Catering/Summary';

const Catering = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    type: "",
    plan: "",
    items: []
  });

  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step > 1 ? step - 1 : navigate("/"));

  const updateSelections = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Create Your Perfect Catering Menu</h1>
        <p>Select your preferences step by step to build a customized catering package</p>
        
        <div className={styles.progress}>
          <div className={`${styles.step} ${step >= 1 ? styles.active : ""}`}>1</div>
          <div className={`${styles.step} ${step >= 2 ? styles.active : ""}`}>2</div>
          <div className={`${styles.step} ${step >= 3 ? styles.active : ""}`}>3</div>
          <div className={`${styles.step} ${step >= 4 ? styles.active : ""}`}>4</div>
        </div>
      </div>

      {step === 1 && (
        <TypeSelection
          onNext={nextStep} 
          updateSelections={updateSelections} 
          selectedType={selections.type}
        />
      )}
      {step === 2 && (
        <PlanSelection 
          onNext={nextStep} 
          onBack={prevStep}
          updateSelections={updateSelections} 
          selectedPlan={selections.plan}
        />
      )}
      {step === 3 && (
        <ItemSelection 
          onNext={nextStep} 
          onBack={prevStep}
          selections={selections}
          updateSelections={updateSelections} 
        />
      )}
      {step === 4 && (
        <Summary 
          onBack={prevStep}
          selections={selections} 
        />
      )}
    </div>
  );
};

export default Catering;