import react from "React"; 
import FormattedDate from "./FormattedDate";

export default function weatherInfo(props) {
return (
    <div className="weatherInfo">
<h1 id="city">{props.data.city}</h1>
      <div className="circle">
        <img
          src={props.data.imgUrl}
          id="icon"
          alt="icon"
          width="150"
          height="150"
        />
        <span className="text">
          <h3 id="temp">
            <strong>{props.data.temperature}</strong>
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
          <p id="humidity">{props.data.humidity}</p>
        </div>
        <div className="col-4">
          <em>Wind:</em>
          <p id="windspeed">{wprops.data.wind}</p>
        </div>
      </div>
      <hr />
      <div className="weather-forecast" id="forecast">
        <div className="row">
          <div className="col-2">
            <span className="weather-forecast-date">{props.data.day}</span>
            <br />
            <img src={props.data.imgUrl} alt="icons" />
            <br />
            <span className="weather-forecast-temperature-max"></span>
            {weatherData.high}/
            <span className="weather-forecast-temperature-min">
              {props.data.low}°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 
