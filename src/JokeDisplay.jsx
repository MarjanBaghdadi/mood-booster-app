// JokeDisplay.js
import React, { useState } from "react";
import axios from "axios";
import styles from "./jokeDisplay.module.css";

export default function JokeDisplay() {
  const [joke, setJoke] = useState("");

  async function fetchJoke() {
    try {
      const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
      if (response.data.type === "twopart") {
        setJoke(`${response.data.setup} ${response.data.delivery}`);
      } else {
        setJoke(response.data.joke);
      }
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch joke. Please try again later.");
    }
  }

  return (
    <div className={styles.displayButtonContainer}>
      <button className={styles.button} onClick={fetchJoke}>
        Joke
      </button>
      <p>{joke}</p>
    </div>
  );
}
