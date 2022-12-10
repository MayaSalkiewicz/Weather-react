import React from "react";

import GenerateDate from "./GenerateDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <GenerateDate date={props.data.date} /> {props.data.city}
      <div className="Weather-today">
        <div>
          <img
            className="Today-img"
            src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt=""
          />
          <p className="Description">Description: {props.data.description}</p>
        </div>

        <ul className="Today-weather-list">
          <li>
            <strong>Temperature: </strong>
            {props.data.temperature} °C
          </li>
          <li>
            <strong>Humidity: </strong> {props.data.humidity} %
          </li>
          <li>
            <strong>Wind: </strong> {props.data.wind} km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
