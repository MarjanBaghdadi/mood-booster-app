import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";
import styles from "./jokeDisplay.module.css";

const PositiveNews2 = () => {
  const [positiveNews2, setPositiveNews2] = useState({
    title: "",
    description: "",
  });

  const fetchPositiveNews2 = async () => {
    try {
      const response = await axios.get(
        "https://www.goodnewsnetwork.org/category/news/"
      );
      const html = response.data;
      const $ = cheerio.load(html);

      // Extracting the title and description of the first news article
      const title = $(".entry-title").first().text().trim();
      const description = $(".entry-summary").first().text().trim();

      setPositiveNews2({ title, description });
    } catch (error) {
      console.error("Error fetching positive news:", error);
    }
  };

  return (
    <div className={styles.displayButtonContainer}>
      <button className={styles.button} onClick={fetchPositiveNews2}>
        Fetch Positive News
      </button>
      <div>
        <div>
          <h3>{positiveNews2.title}</h3>
          <p>{positiveNews2.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PositiveNews2;
