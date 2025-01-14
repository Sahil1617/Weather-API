import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9b9f0e656897eb27d8534778003c8414";

    let getWeatherInfo = async () =>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }


    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo); 
    }

  return (
    <div className='SearchBox'>
        <h3>Search for Weather</h3>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City" variant="outlined" required value={city} onChange={handleChange}/>
            <br/><br/>
            <Button variant="contained" type='submit'>Search</Button>
        </form>
    </div>
  )
}

export default SearchBox