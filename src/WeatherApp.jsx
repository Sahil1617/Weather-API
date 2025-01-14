import React from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

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
    <div style={{textAlign:"center"}}>
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp