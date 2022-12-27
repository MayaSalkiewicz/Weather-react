import React, { useState } from "react";
import axios from "axios";

import "./WeatherForecast.css";

import WeatherForecastDay from "./WeatherForecastDay";

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
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    let apiKey = "db032bbtffdbd68470ado6d02103ff2b";
    let latitude = props.forecastData.lat;
    let longitude = props.forecastData.lon;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
