import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        setWeatherData({
            ready: true,
          city: response.data.city,
          date: new Date(response.data.time * 1000),
          description: response.data.condition.description,
          temperature: response.data.temperature.current,
          humidity: response.data.temperature.humidity,
          wind: response.data.wind.speed,
          pressure: response.data.temperature.pressure,
          iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        });
    }

    if (weatherData.ready) {
        return (
          <div className="Weather">
            <form>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Search for a city"
                    className="form-control"
                    autoFocus="on"
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
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mb-3">
              <div className="col-6">
                <div className="d-flex flex-row mb-3">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="p-2"
                  />
                  <div className="p-2">
                    <span className="temperature">
                      {Math.round(weatherData.temperature)}
                    </span>
                    <span className="unit">°C</span>
                  </div>
                </div>
              </div>
              <div className="col-6 mt-2">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                  <li>Pressure: {weatherData.pressure} mb</li>
                </ul>
              </div>
            </div>
          </div>
        );
    } else {
        const apiKey = "29a19a2a04o29b700f9cbf09t43af556";
        let apiUrl =
          `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
          axios.get(apiUrl).then(handleResponse);

          return "Loading";
          //add loader spinner
    }
}