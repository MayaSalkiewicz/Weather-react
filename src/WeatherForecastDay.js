import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return weekDays[day];
  }

  return (
    <div className="row">
      <div className="col">
        <div className="weather-forecast-day">{day()}</div>
        <div className="weather-forecast-icon">
          <WeatherIcon code={props.data.condition.icon} size={50} />
        </div>
        <div className="weather-forecast-temp">
          <span className="temp-min">{maxTemperature()}° </span>
          <span className="temp-max"> {minTemperature()}°</span>
        </div>
      </div>
    </div>
  );
}
