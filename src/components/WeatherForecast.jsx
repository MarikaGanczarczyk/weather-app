import { Calendar, Droplets } from "lucide-react";
import React, { useEffect, useState } from "react";

function WeatherForecast({ city, isCelsius }) {
  const [forecastData, setForecastData] = useState(null);
  //  const [loading, setLoading] = useState(true);

  const API_KEY = "2C847GG38NSNX88CCKHKH2588";

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${API_KEY}&contentType=json`
      );
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setForecastData(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Could not fetch weather data. Please try again.");
    }
  };
  useEffect(() => {
    fetchWeather(city);
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
    <div className="bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl p-8 shadow-2xl">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-white/10 rounded-full">
          <Calendar className="w-6 h-6 text-white/80" />
        </div>
        <h2 className="text-2xl font-bold text-white">5 Day Forecast</h2>
      </div>
      <div className="space-y-4">
        {/*Map method  */}
        {forecastData?.days.slice(0, 5).map((day, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-5 bg-white/ backdrop-blur-sm rounded-2xl hover:bg-white/5 transition-all duration-300 group border border-white/10"
          >
            <div className="flex items-center space-x-5 flex-1">
              <div className="text-white/90 group-hover:text-white transition-all transform group-hover:scale-110 duration">
                {new Date(day.datetime).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-white/60">
                <Droplets className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-medium ">{day.humidity}%</span>
              </div>

              <div className="text-right space-x-4">
                <div className="text-white font-bold text-xl">
                  {" "}
                  {convertTemp(day.temp)}° {isCelsius ? "C" : "F"}{" "}
                </div>
                <div className="  text-white/60 text-sm space-x-2 ">
                  <span>H: {Math.round(day.tempmax)}°</span>
                  <span>L: {Math.round(day.tempmin)}°</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherForecast;
