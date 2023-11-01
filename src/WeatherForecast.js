import React from "react";
import "./WeatherForecast.css"

export default function WeatherForecast() {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Tue</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
              className="WeatherIcon"
              alt="scattered clouds"
            />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">15°</span>
              <span className="WeatherForecast-temperature-min">9°</span>
            </div>
          </div>
        </div>
      </div>
    );
}