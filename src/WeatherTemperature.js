import React, { useState } from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <li>
          <strong>Temperature: </strong>{" "}
          <span className="temperature">{props.celsius} </span>
          <span className="unit">
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </li>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <li>
          <strong>Temperature: </strong>
          <span className="temperature">{fahrenheit()} </span>
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C{" "}
            </a>
            | °F
          </span>
        </li>
      </div>
    );
  }
}
