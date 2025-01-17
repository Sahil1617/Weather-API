import React from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
import "./weather.css"

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState ({
        city: "DEMO",
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        feelsLike: 24.87,
        weather: "Haze"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
  return (
    <div className='mainBox' style={{textAlign:"center"}}>
        <h1 style={{color:"white", fontFamily: "cursive"}}>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp