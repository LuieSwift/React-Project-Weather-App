import React from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useStat("celsius");
function showFahrenheit(event) {
event.preventDefault(); 
setUnit("fahrenheit"); 
}

function showCelsius(event) {
event.preventDefault(); 
setUnit("celsius"); 
}

function Fahrenheit() {
     return (props.celsius * 9) / 5 + 32; 
 } 

  if (unit === "celsius") {
      return (
          <div className="weatherTemperature">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">°C|{" "} 
            <a href="/" onClick={showFahrenheit}>
            °F
     </a>        
     </span> 
     </div>
      );
  } else {
  return (
      <div className="weatherTemperature">
          <span className="temperature">{Math.round(props.celsius)}</span>
          <span className="unit">
              <a href="/" onClick={showCelsius}>
              </a>{" "}  
          </span>
      </div> 
  );
}
}