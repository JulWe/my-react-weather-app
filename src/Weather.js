import React from "react";
import "./Weather.css";
export default function Weather() {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>Vienna</h1>
        <ul>
          <li>Tuesday 17:30</li>
          <li>Rainy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="mostly cloudy"
            />
            17°C
          </div>
          <div className="col-6">
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