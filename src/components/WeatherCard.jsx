import {
  MapPin,
  Sunset,
  Sunrise,
  Droplets,
  Wind,
  Eye,
  Gauge,
} from "lucide-react";
import React, { useEffect, useState } from "react";

function WeatherCard({ city,}) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "2C847GG38NSNX88CCKHKH2588";

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
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWeather(city);
  }, [city]);
  
  if (loading) {
    return (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
        <div className="text-white text-center">Loading weather data...</div>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
        <div className="text-white text-center">No weather data available</div>
      </div>
    );
  }

  const currentDay = weatherData.days[0];
  const current = weatherData.currentConditions;

  const formatTime = (timeString) => {
    if (!timeString) return "";
    return timeString.slice(0, 5);
  };
  const weatherStats = [
    {
      icon: Droplets,
      label: "Humidity",
      value: `${current.humidity}%`,
      color: "text-blue-400",
    },
    {
      icon: Wind,
      label: "Wind Speed",
      value: `${current.windspeed} km/h`,
      color: "text-cyan-400",
    },
    {
      icon: Eye,
      label: "Visibility",
      value: `${current.visibility} km`,
      color: "text-purple-400",
    },
    {
      icon: Gauge,
      label: "Pressure",
      value: `${current.pressure} mb`,
      color: "text-pink-400",
    },
    {
      icon: Droplets,
      label: "Precipitation",
      value: `${current.precip || 0} mm`,
      color: "text-indigo-400",
    },
    {
      icon: Wind,
      label: "UV Index",
      value: current.uvindex || "N/A",
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-500">
      {/*Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/10 rounded-full">
            <MapPin className="w-5 h-5 text-white/80" />
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg">
              {weatherData.resolvedAddress}
            </h2>
            <p className="text-white/60">{weatherData.timezone}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-white/70 text-sm">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="text-white/50 text-xs"> </div>
        </div>
      </div>
      {/* Main Weather Display */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex-1">
          <div className="text-7xl font-bold text-white mb-3 tracking-tight">
            {Math.round(current.temp)}°C
          </div>
          <div className="text-white/90 text-xl capitalize mb-2 font-medium">
            {currentDay.conditions}
          </div>
          <div className="flex items-center space-x-4 text-white/60 text-sm">
            <span>H: {Math.round(currentDay.tempmax)}°</span>
            <span>L: {Math.round(currentDay.tempmin)}°</span>
          </div>
        </div>
        <div className="text-white/90 transform hover:scale-110 transition-transform duration-300">
          {currentDay.icon === "clear-day" && "☀️"}
          {currentDay.icon === "clear-night" && "🌙"}
          {currentDay.icon === "cloudy" && "☁️"}
          {currentDay.icon === "partly-cloudy-day" && "⛅"}
          {currentDay.icon === "partly-cloudy-night" && "🌙"}
          {currentDay.icon === "rain" && "🌧️"}
          {currentDay.icon === "snow" && "❄️"}
          {currentDay.icon === "wind" && "💨"}
          {![
            "clear-day",
            "clear-night",
            "cloudy",
            "partly-cloudy-day",
            "partly-cloudy-night",
            "rain",
            "snow",
            "wind",
          ].includes(currentDay.icon) && "🌤️"}
        </div>
      </div>
      {/*Weather Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {weatherStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <span className="text-white/70 text-sm font-medium">
                {stat.label}
              </span>
            </div>
            <div className="text-white font-semibold text-lg pl-11">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/*Sun Time  */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-linear-to-r from-orange-500/20 to bg-yellow-500/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-400/20">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-purple-400/20 rounded-full">
              <Sunset className="w-4 h-4 text-purple-300" />
            </div>
            <span className="text-white/80 text-sm font-medium">Sunset</span>
          </div>
          <div className="text-white font-semibold text-lg pl-11">
            {formatTime(currentDay.sunset)}
          </div>
        </div>
        <div className="bg-linear-to-r from-pink-500/20 to-pink-300/20 backdrop-blur-sm rounded-2xl p-4 border border-pink-400/20">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-purple-400/20 rounded-full">
              <Sunrise className="w-4 h-4 text-purple-300" />
            </div>
            <span className="text-white/80 text-sm font-medium">Sunrise</span>
          </div>
          <div className="text-white font-semibold text-lg pl-11">
            {formatTime(currentDay.sunrise)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
