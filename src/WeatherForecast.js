import React from "react";

import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="weather-forecast-day">Thursday</div>
          <div className="weather-forecast-icon">
            <WeatherIcon code="01d" size={50} />
          </div>
          <div className="weather-forecast-temp">
            <span className="temp-min">10° </span>
            <span className="temp-max"> -5°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
