import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function showCity(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c26ee9ecca3230f1645ab722354817a&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={showCity}>
      <input
        onChange={updateCity}
        className="Search-input"
        type="Search"
        placeholder=" Type a city..."
      />
      <input className="Submit-input" type="submit" value="Check" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="Weather-today">
          <div>
            <img
              className="Today-img"
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt=""
            />
            <p className="Description">Description: {weather.description}</p>
          </div>

          <ul className="Today-weather-list">
            <li>
              <strong>Temperature: </strong>
              {weather.temperature} °C
            </li>
            <li>
              <strong>Humidity: </strong> {weather.humidity} %
            </li>
            <li>
              <strong>Wind: </strong> {weather.wind} km/h
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <p>
          Write a name of the City above to see Weatherforecast for today :)
        </p>
      </div>
    );
  }
}
