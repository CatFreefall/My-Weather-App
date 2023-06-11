import React from "react";

import "/src/styles/forecast-styles/ForecastInfo.css";

export function DailyForecastInfo({ time, icon, maxTemp, minTemp, darkMode }) {
  return (
    <div className="forecast-info" id={darkMode ? "dark-mode-info" : null}>
      <div>
        <h4
          className="panel-top-rectangle"
          id={darkMode ? "dark-mode-panel-rect" : null}
        >
          {time}
        </h4>
      </div>
      <div
        className="weather-icon-div"
        id={darkMode ? "dark-mode-icon-div" : null}
      >
        <img className="weather-icon" src={icon} alt="weather-icon" />
      </div>
      <h4 className="max-temp">{maxTemp} °C</h4>
      <h4 className="min-temp">{minTemp} °C</h4>
    </div>
  );
}
