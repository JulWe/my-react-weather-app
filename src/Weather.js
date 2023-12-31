import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
      
        setWeatherData({
          ready: true,
          city: response.data.city,
          coordinates: response.data.coordinates,
          date: new Date(response.data.time * 1000),
          description: response.data.condition.description,
          temperature: response.data.temperature.current,
          humidity: response.data.temperature.humidity,
          wind: response.data.wind.speed,
          pressure: response.data.temperature.pressure,
          iconUrl:
            `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
        });
    }

function search() {
  const apiKey = "29a19a2a04o29b700f9cbf09t43af556";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event) {
  setCity(event.target.value);
}

    if (weatherData.ready) {
        return (
          <div className="Weather">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Search for a city"
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-secondary w-100"
                  />
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast coordinates={weatherData.coordinates}/>
          </div>
        );
    } else {
        search();
        return "Loading...";
          //add loader spinner
    }
}