import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo"; 
import "./Weather.css"; 
import axios from "axios"; 
 

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity); 

function handleResponse(response) {
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp, 
    date: new Date(response.data.dt * 1000), 
    wind: response.data.main.wind.speed, 
    city: response.data.name.city,
    description: response.data.weather[0].description, 
    humidity: response.data.main.humidity
  }); 
}

function handleResponse(event) {
  event.preventDefault();
  search(); 
}

function handleCityChange(event) {
setCity(event.target.value); 
}

function search() {
  const apiKey = "b3566d495f743e9128f9d94b40433e4b"; 
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
axios.get(apiUrl).then(handleResponse); 
}

if (weatherData.ready) {
  return (
    <div className="Searchcity">
      <form id="search-city">
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            placeholder="Enter a city"
            className="form-control"
            id="city-input"
            autoComplete="off"
            autoFocus="on"
            type="search"
            onChange={handleCityChange}
          />
        </div>
        </form>
      </form>
      <a href role="button">
        <button
          type="click"
          className="btn-success"
          id="current-location-button"
        >
      <img src="images/GPS.png" alt="GPS" width="50%" />
        </button>
      </a>

      <WeatherInfo data={weatherData} /> 
  </div>
  );  
} else {
search(); 
return "Loading..."; 
}
}
