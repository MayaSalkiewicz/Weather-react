import React, { useState } from "react";
import axios from "axios";

import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [loaded, SetLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    SetLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="weather-forecast-day">Thursday</div>
            <div className="weather-forecast-icon">
              <WeatherIcon code="rain-day" size={50} />
            </div>
            <div className="weather-forecast-temp">
              <span className="temp-min">10° </span>
              <span className="temp-max"> -5°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "db032bbtffdbd68470ado6d02103ff2b";
    let latitude = props.forecastData.lat;
    let longitude = props.forecastData.lon;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
