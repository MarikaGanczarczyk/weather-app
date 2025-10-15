import React, { useState } from "react";
import "./index.css";
import Weather from "./components/Weather";
import WeeklyForecast from "./components/WeeklyForecast";
import Search from "./components/Search";

function App() {
    const [city, setCity] = useState("London");
    const [isCelsius, setIsCelsius] = useState(null);
  return (
    <div className="app">
      <div className="search-container">
        <Search setCity={setCity} setIsCelsius={setIsCelsius} isCelsius={isCelsius}/>
      </div>
      <div className="weather-wrapper">
        <Weather city={city} setCity={setCity} isCelsius={isCelsius} setIsCelsius={setIsCelsius}/>
        <WeeklyForecast city={city} isCelsius={isCelsius} setIsCelsius={setIsCelsius}/>
      </div>
    </div>
  );
}

export default App;
