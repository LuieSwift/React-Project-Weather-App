import React, { userState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios"; 
 

export default function Weather(props) {
const [weatherData, setWeatherData] = userState({ ready: false }); 
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

if (weatherData.ready) {
  return (
    <div className="Searchcity">
      <form id="search-city">
        <div className="mb-3">
          <input
            placeholder="Enter a city"
            className="form-control"
            id="city-input"
            autoComplete="off"
            autoFocus="on"
            type="search"
          />
        </div>
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
      <h1 id="city">{weatherData.city}</h1>
      <div className="circle">
        <img
          src={weatherData.imgUrl}
          id="icon"
          alt="icon"
          width="150"
          height="150"
        />
        <span className="text">
          <h3 id="temp">
            <strong>{weatherData.temperature}</strong>
          </h3>
          <span className="units">
            <a
              STYLE="text-decoration:none"
              href="/"
              id="celsius-link"
              class="active"
            >
              °C
            </a>
            |
            <a STYLE="text-decoration:none" href="/" id="fahrenheit-link">
              °F
            </a>
          </span>
          <br />
          <p> 
          <formattedDate date={weatherData.date} />
          </p> 
        </span>
      </div>
      <div className="row">
        <div class="col-4">
          <em>Conditions:</em>
          <p id="description">{weatherData.description}</p>
        </div>
        <div class="col-4">
          <em>Humidity:</em>
          <p id="humidity">{weatherData.humidity}</p>
        </div>
        <div className="col-4">
          <em>Wind:</em>
          <p id="windspeed">{weatherData.wind}</p>
        </div>
      </div>
      <hr />
      <div className="weather-forecast" id="forecast">
        <div className="row">
          <div className="col-2">
            <span className="weather-forecast-date">{weatherData.day}</span>
            <br />
            <img src={weatherData.imgUrl} alt="icons" />
            <br />
            <span className="weather-forecast-temperature-max"></span>
            {weatherData.high}/
            <span className="weather-forecast-temperature-min">
              {weatherData.low}°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} else {
const apiKey = "b3566d495f743e9128f9d94b40433e4b"; 
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`; 
axios.get(apiUrl).then(handleResponse); 

return "Loading..."; 
}
}
