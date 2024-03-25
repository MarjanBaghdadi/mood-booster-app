import React from "react";
import { useState } from "react";
import styles from "./App.css";
import JokeDisplay from "./JokeDisplay";
import QuoteDisplay from "./QuoteDisplay";
import AffirmationsDisplay from "./AffirmationsDisplay";
import CuteAnimalsDisplay from "./CuteAnimalsDisplay";
import Header from "./Header";
import Footer from "./Footer";
import PositiveNews from "./PositiveNews";
import CuteAnimalsPhotos from "./CuteAnimalsPhotos";

function App() {
  return (
    <div className="App">
      <Header />
      <JokeDisplay />
      <QuoteDisplay />
      <AffirmationsDisplay />
      <PositiveNews />
      <CuteAnimalsDisplay />
      <CuteAnimalsPhotos />
      <Footer />
    </div>
  );
}

export default App;
