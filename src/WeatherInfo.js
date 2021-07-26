import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function weatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1 id="city">{props.data.city}</h1>
      <div className="circle">
        <div className="img">
          <WeatherIcon code={props.data.icon} size={120} />{" "}
        </div>
        <span className="text">
          <div>
            {" "}
            <h3 id="temp">
              <strong>
                {" "}
                <WeatherTemperature celsius={props.data.temperature} />
              </strong>
            </h3>
          </div>
          <br />
          <p>
            <FormattedDate date={props.data.date} />
          </p>
        </span>
      </div>
      <div className="row">
        <div class="col-4">
          <em>Conditions:</em>
          <p id="description">{props.data.description}</p>
        </div>
        <div class="col-4">
          <em>Humidity:</em>
          <p id="humidity">{props.data.humidity}%</p>
        </div>
        <div className="col-4">
          <em>Wind:</em>
          <p id="windspeed">{props.data.wind}mph</p>
        </div>
      </div>
      <hr />
      <div className="weather-forecast" id="forecast">
        <div className="row">
          <div className="col-2">
            <span className="weather-forecast-date">{props.data.day}</span>
            <br />
            <img src={props.data.icon} alt="icons" />
            <br />
            <span className="weather-forecast-temperature-max"></span>
            {props.data.high}/
            <span className="weather-forecast-temperature-min">
              {props.data.low}°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
