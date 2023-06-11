import React from "react";

import "/src/styles/forecast-styles/ForecastInfo.css";

export function HourlyForecastInfo({ condition, icon, temp, time, darkMode }) {
  return (
    <div className="forecast-info" id={darkMode ? "dark-mode-info" : null}>
      <div>
        <h4
          className="panel-top-rectangle"
          id={darkMode ? "dark-mode-panel-rect" : null}
        >
          {time.split(" ")[1]}
        </h4>
      </div>
      <div
        className="weather-icon-div"
        id={darkMode ? "dark-mode-icon-div" : null}
      >
        <img className="weather-icon" src={icon} alt="weather-icon" />
      </div>
      <h4 className="condition">{condition}</h4>
      <h4 className="temp">{temp} °C</h4>
    </div>
  );
}
