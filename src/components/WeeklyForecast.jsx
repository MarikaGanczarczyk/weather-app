import React, { useEffect, useState } from "react";
import "./WeeklyForecast.css";

function WeeklyForecast() {
  const [forecastData, setForecastData] = useState(null)
  const [city, setCity] = useState("London");

  const API_KEY = "2C847GG38NSNX88CCKHKH2588";



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
    }, []);

  return <div>
    <div className="weekly-forecast">
      <h2>7-Day Forecast</h2>
      <div className="forecast-cards">
        {forecastData?.days.slice(0, 7).map((day, index) => (
          <div key={index} className="day-card">
            <p>{new Date(day.datetime).toLocaleDateString('en-US', { weekday: 'short' })}</p>
            {/* <img src={} alt="" /> */}
            <p>{Math.round(day.tempmax)}° / {Math.round(day.tempmin)}°</p>
          </div>
        ))}
      </div>
    </div>
  </div>;
}

export default WeeklyForecast;
