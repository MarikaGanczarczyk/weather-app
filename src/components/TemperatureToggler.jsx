import { useState } from "react";

const TemperatureToggle = ({ isCelsius, setIsCelsius }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setIsCelsius(true)}
        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 
          ${isCelsius ? "bg-white/20 text-white scale-105" : "text-white/70"}`}
      >
        °C
      </button>

      <button
        onClick={() => setIsCelsius(false)}
        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 
          ${!isCelsius ? "bg-white/20 text-white scale-105" : "text-white/70"}`}
      >
        °F
      </button>
    </div>
  );
};

export default TemperatureToggle;