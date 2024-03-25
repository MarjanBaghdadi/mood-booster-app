import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./jokeDisplay.module.css";

const PositiveNews = () => {
  const [positiveNews, setPositiveNews] = useState([]);

  const fetchPositiveNews = async () => {
    const options = {
      method: "GET",
      url: "https://happy-news.p.rapidapi.com/cnn",
      headers: {
        "X-RapidAPI-Key": "683c6f784dmsh66f459bccc2bad4p100809jsn672ab4e2751e",
        "X-RapidAPI-Host": "happy-news.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setPositiveNews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFetchNewsClick = () => {
    fetchPositiveNews();
  };

  return (
    <div className={styles.displayButtonContainer}>
      <button className={styles.button} onClick={handleFetchNewsClick}>
        Fetch Positive News
      </button>
      <div>
        {positiveNews.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PositiveNews;
