import React, { useState } from 'react'
// import search_icon from "../assets/search.png";
import "./Search.css"

function Search({setCity,setIsCelsius, isCelsius}) {
    const [inputValue, setInputValue] = useState("");


      // Search
  const handleSearch = () => {
    if (inputValue.trim()) {
      setCity(inputValue);
      setInputValue("");
    }
  };
  // Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="top-bar">
      <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onClick={handleSearch}
                />
              
              </div>
              <div className="temp-toggle">
          <button
            className={isCelsius ? "active" : ""}
            onClick={() => setIsCelsius(true)}
          >
            °C
          </button>
          <button
            className={!isCelsius ? "active" : ""}
            onClick={() => setIsCelsius(false)}
          >
            °F
          </button>
        </div>
    </div>
  )
}

export default Search
