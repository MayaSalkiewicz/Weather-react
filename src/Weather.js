import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function Search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c26ee9ecca3230f1645ab722354817a&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showCity(event) {
    event.preventDefault();
    Search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={showCity}>
          <input
            onChange={updateCity}
            className="Search-input"
            type="Search"
            placeholder=" Type a city..."
          />
          <input className="Submit-input" type="submit" value="Check" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    Search();
  }
}
