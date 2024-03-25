import React, { useState, useEffect } from "react";
import axios from "axios";

const CuteAnimalsPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random?query=baby+animal&count=10",
          {
            headers: {
              Authorization: "Client-ID YOUR_UNSPLASH_ACCESS_KEY",
            },
          }
        );
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <div>
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.urls.regular}
            alt={photo.alt_description}
          />
        ))}
      </div>
    </div>
  );
};

export default CuteAnimalsPhotos;
