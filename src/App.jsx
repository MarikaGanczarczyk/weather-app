import React from 'react'
import './index.css'
import Weather from './components/Weather'
import WeeklyForecast from './components/WeeklyForecast'

function App() {
  return (
    <div className='app'>
     <Weather/> 
     <WeeklyForecast/>
    </div>
  )
}

export default App
