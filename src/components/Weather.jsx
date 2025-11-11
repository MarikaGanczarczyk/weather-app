import React, { useEffect, useState } from "react";
// import "./Weather.css";

import clear_icon from "../assets/sun.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rainy_icon from "../assets/rainy.png";
import snow_icon from "../assets/snow.png";

function Weather({ city, isCelsius, setIsCelsius }) {
  const [weatherData, setWeatherData] = useState(null);

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
  }, [city]);

  
  const convertTemp = (temp) => {
    if (isCelsius) {
      return Math.round(temp);
    } else {
      return Math.round((temp * 9) / 5 + 32);
    }
  };

  return (
    <>
      <div className="weather">
      
        <div className="weather-box">
             
          {weatherData ? (
            <>
             <div className="date">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </div>
              <img
                src={allIcons[weatherData.currentConditions.icon] || clear_icon}
                alt=""
                className="weather-icon"
              />
              <p className="temperature">
                {convertTemp(weatherData.currentConditions.temp)}°
                {isCelsius ? "C" : "F"}
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
      </div>
    </>
  );
}

export default Weather;
