import React, { useEffect, useState } from "react";
import "./WeeklyForecast.css";

import clear_icon from "../assets/sun.png";

import wind_icon from "../assets/wind.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rainy_icon from "../assets/rainy.png";
import snow_icon from "../assets/snow.png";

function WeeklyForecast({ city, isCelsius }) {
  const [forecastData, setForecastData] = useState(null);
  

  const API_KEY = "2C847GG38NSNX88CCKHKH2588";
  const allIcons = {
    rain: rainy_icon,
    "showers-day": drizzle_icon,
    "showers-night": drizzle_icon,
    wind: wind_icon,
    cloudy: cloud_icon,
    "partly-cloudy-day": cloud_icon,
    "partly-cloudy-night": cloud_icon,
    "clear-day": clear_icon,
    "clear-night": clear_icon,
    snow: snow_icon,
  };

  const fetchWeeklyWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${API_KEY}&contentType=json`
      );
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setForecastData(data);
      console.log("Weather Data:", data);
    } catch (error) {
      console.error("Error:", error);
      alert("Could not fetch weather data. Please try again.");
    }
  };
  useEffect(() => {
    fetchWeeklyWeather(city);
  }, [city]);

  // Temp
  const convertTemp = (temp) => {
    if (isCelsius) {
      return Math.round(temp);
    } else {
      return Math.round((temp * 9) / 5 + 32);
    }
  };

  return (
    <div>
      <div className="weekly-forecast">
        <div className="weather-title">
          <h2>7-Day Forecast</h2>
        </div>

        <div className="forecast-cards">
          {forecastData?.days.slice(0, 7).map((day, index) => (
            <div key={index} className="day-card">
              <img
                src={allIcons[day.icon] || clear_icon}
                alt=""
                className="day-card-icon"
              />
              <p>
                {new Date(day.datetime).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </p>

              <p>
                {convertTemp(day.tempmax)}° {isCelsius ? "C" : "F"} /{" "}
                {convertTemp(day.tempmin)}°{isCelsius ? "C" : "F"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeeklyForecast;
