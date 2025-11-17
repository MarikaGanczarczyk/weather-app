import { Calendar, Droplets } from "lucide-react";
import React, { useEffect, useState } from "react";

function WeatherForecast({city, isCelsius}) {
   const [forecastData, setForecastData] = useState(null);
  //  const [loading, setLoading] = useState(true);


  const API_KEY = "2C847GG38NSNX88CCKHKH2588";
    const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
      const convertTemp = (temp) => {
    return isCelsius ? temp : celsiusToFahrenheit(temp);
  };

    const fetchWeather = async (cityName) => {
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
      fetchWeather(city);
    }, [city]);
 

    
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
        <div className="flex items-center justify-between p-5 bg-white/ backdrop-blur-sm rounded-2xl hover:bg-white/5 transition-all duration-300 group border border-white/10">
          <div className="flex items-center space-x-5 flex-1">
            <div className="text-white/90 group-hover:text-white transition-all transform group-hover:scale-110 duration">
            </div>
            <div className="flex-1">
                <div className="text-white font-semibold text-lg">

                </div>
                <div className="text-white/70 text-sm capitalize font-medium">
Weather Description 
                </div>

            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white/60">
            <Droplets className="w-4 h-4 text-blue-300"/>
<span className="text-sm font-medium">

</span>
            </div>
            <div className="text-right">
                <div className="text-white font-bold text-xl">Temperate

                </div>
                <div className="text-white text0sm font-medium">Main Temp

                </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
