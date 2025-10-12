import React, { useEffect, useState } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/sun.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rainy_icon from "../assets/rainy.png";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");

  const API_KEY = "2C847GG38NSNX88CCKHKH2588";

  const allIcons = {
    "rain": rainy_icon,
    "showers-day": drizzle_icon,
    "showers-night": drizzle_icon,
    "wind": wind_icon,
    "cloudy": cloud_icon,
    "partly-cloudy-day": cloud_icon,
    "partly-cloudy-night": cloud_icon,
    "clear-day": clear_icon,
    "clear-night": clear_icon,
  };

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${API_KEY}&contentType=json`
      );
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeatherData(data);
      console.log("Weather Data:", data);
 
    } catch (error) {
      console.error("Error:", error);
      alert("Could not fetch weather data. Please try again.");
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  // Search
  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city);
      setCity("");
    }
  };
  // Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <img
          className="search-icon"
          src={search_icon}
          alt=""
          onClick={handleSearch}
        />
      </div>

      {weatherData ? (
        <>
          <img src={allIcons[weatherData.currentConditions.icon] || clear_icon} alt="" className="weather-icon" />
          <p className="temperature">
            {Math.round(weatherData.currentConditions.temp)}°C
          </p>
          <p className="location">{weatherData.resolvedAddress}</p>

          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="" className="weather-icon-2" />
              <div>
                <p>{weatherData.currentConditions.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="" className="weather-icon-2" />
              <div>
                <p>{weatherData.currentConditions.windspeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Weather;
