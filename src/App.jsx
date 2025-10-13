import React, { useState } from "react";
import "./index.css";
import Weather from "./components/Weather";
import WeeklyForecast from "./components/WeeklyForecast";

function App() {
    const [city, setCity] = useState("London");
  return (
    <div className="app">
      <div className="weather-wrapper">
        <Weather city={city} setCity={setCity}/>
        <WeeklyForecast city={city} />
      </div>
    </div>
  );
}

export default App;
