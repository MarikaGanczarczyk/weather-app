import React from 'react'
import './Weather.css'
import search_icon from '../assets/search1.png'

function Weather() {
  return (
    <div>
      <div className="weather">
        <div className="search-bar">
            <input type="text" placeholder='Search' />
            <img  className='search-icon' src={search_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Weather
