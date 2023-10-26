import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
    let city = "Vienna";
    let apiUrl =
      `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

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
        <h1>Vienna</h1>
        <ul>
          <li>Tuesday 17:30</li>
          <li>Rainy</li>
        </ul>
        <div className="row mb-3">
          <div className="col-6">
            <div className="d-flex flex-row mb-3">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="mostly cloudy"
                className="p-2"
              />
              <div className="p-2">
                <span className="temperature">17</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6 mt-2">
            <ul>
              <li>Precipitation: 40%</li>
              <li>Humidity: 67%</li>
              <li>Wind: 8 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}