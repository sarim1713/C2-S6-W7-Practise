import React from "react";
import {useState} from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [weather, setWeather] = React.useState(true);

  function onSunClick() {
    setWeather(true);
    // Complete this code when we click on Sunny Time
    
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setWeather(false);
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    return weather? "Sunny Day": "Rainy Day";

  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    return weather? "sunny": "rainy";
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick = {onSunClick}>Sunny Time</button>
      <button onClick = {onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
