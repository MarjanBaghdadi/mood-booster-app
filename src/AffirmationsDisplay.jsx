import React, { useState } from "react";
import axios from "axios";
import styles from "./jokeDisplay.module.css";
import { affirmations } from "./affirmations"; // Import the list of affirmations

export default function AffirmationDisplay() {
  const [randomAffirmation, setRandomAffirmation] = useState("");

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setRandomAffirmation(affirmations[randomIndex].affirmation);
  };

  return (
    <div className={styles.displayButtonContainer}>
      <button className={styles.button} onClick={handleButtonClick}>
        Affirmation
      </button>
      <p>{randomAffirmation}</p>
    </div>
  );
}
