import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vienna"/>
        <footer>
          This project was coded by Julia and is{" "}
          <a
            href="https://github.com/JulWe/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

