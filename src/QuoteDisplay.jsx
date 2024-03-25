import React, { useState, useEffect } from "react";
import styles from "./jokeDisplay.module.css";

export default function QuoteDisplay() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();

      setQuote(data.content);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className={styles.displayButtonContainer}>
      <button className={styles.button} onClick={fetchQuote}>
        Motivational Quote
      </button>
      <p>{quote}</p>
    </div>
  );
}
