import React, { useState } from 'react'

const TemperatureToggle = () => {
  const [unit, setUnit] = useState("C");

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setUnit("C")}
        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 
          ${unit === "C" ? "bg-white/20 text-white scale-105" : "text-white/70"}`}
      >
        °C
      </button>

      <button
        onClick={() => setUnit("F")}
        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 
          ${unit === "F" ? "bg-white/20 text-white scale-105" : "text-white/70"}`}
      >
        °F
      </button>
    </div>
  );
};


export default TemperatureToggle
