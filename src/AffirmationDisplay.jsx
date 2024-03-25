// import React, { useState } from "react";
// import axios from "axios";
// import styles from "./jokeDisplay.module.css";

// export default function AffirmationDisplay() {
//   const [affirmation, setAffirmation] = useState("");

//   // async function fetchAffirmation() {
//   //   try {
//   //     const response = await fetch("https://www.affirmations.dev/");
//   //     setAffirmation(response.data.affirmation);
//   //   } catch (error) {
//   //     console.error("Error fetching affirmation:", error);
//   //     setAffirmation("Failed to fetch affirmation. Please try again later.");
//   //   }
//   // }

//   const fetchAffirmation = async () => {
//     try {
//       const response = await fetch("https://www.affirmations.dev/");
//       setAffirmation(response.affirmation);
//     } catch (error) {
//       console.error("Error fetching affirmation:", error);
//       setAffirmation("Failed to fetch affirmation. Please try again later.");
//     }
//   };

//   return (
//     <div>
//       <div className={styles.displayButtonContainer}>
//         <button className={styles.button} onClick={fetchAffirmation}>
//           Affirmation
//         </button>
//         <p>{affirmation}</p>
//       </div>
//     </div>
//   );
// }
