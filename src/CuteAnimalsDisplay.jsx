import React, { useState } from "react";
import styles from "./jokeDisplay.module.css";
import axios from "axios";

const CuteAnimalsDisplay = () => {
  // State to store the video URL
  const [videoUrl, setVideoUrl] = useState("");
  const [videoThumbnails, setVideoThumbnails] = useState([]);
  const REACT_APP_YOUTUBE_API_KEY = "AIzaSyDWoSd9GiT-tm8NWbe2sX4C9dneK0q0M48";

  // Function to handle fetching a random cute animal video
  const fetchCuteAnimalVideo = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=1&q=cute+baby+animals&type=video`
      );

      // Get a random video from the response
      const videoId = response.data.items[0].id.videoId;
      setVideoUrl(`https://www.youtube.com/watch?v=${videoId}`);

      // Extract thumbnails from the response
      const thumbnails = response.data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url,
      }));

      setVideoThumbnails(thumbnails);
    } catch (error) {
      console.error("Error fetching cute animal videos:", error);
    }
  };

  // Function to handle setting the video URL when clicking on a thumbnail
  const handleThumbnailClick = (videoId) => {
    setVideoUrl(`https://www.youtube.com/watch?v=${videoId}`);
    console.log(videoUrl);
  };

  return (
    <div className={styles.displayButtonContainer}>
      <button className={styles.button} onClick={fetchCuteAnimalVideo}>
        Cute Animals Video
      </button>

      {videoThumbnails.map((video) => (
        <div key={video.id}>
          <p>{video.title}</p>
          <img
            src={video.thumbnail}
            alt={video.title}
            onClick={() => handleThumbnailClick(video.id)}
          />
        </div>
      ))}

      {videoUrl && (
        <div className={styles.videoLink}>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            Click here to watch the video
          </a>
        </div>
      )}
    </div>
  );
};

export default CuteAnimalsDisplay;
