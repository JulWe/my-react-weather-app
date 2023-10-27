import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mb-3">
          <div className="col-6">
            <div className="d-flex flex-row mb-3">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="p-2"
              />
              <div className="p-2">
                <span className="temperature">
                  {Math.round(props.data.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6 mt-2">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
              <li>Pressure: {props.data.pressure} mb</li>
            </ul>
          </div>
        </div>
      </div>
    );
}