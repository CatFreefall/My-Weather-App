import React from "react";

import "/src/styles/forecast-styles/ForecastInfo.css";

export function DailyForecastInfo({ time, icon, maxTemp, minTemp }) {
  return (
    <div className="forecast-info">
      <div>
        <h4 className="panel-top-rectangle">{time}</h4>
      </div>
      <div className="weather-icon-div">
        <img className="weather-icon" src={icon} alt="weather-icon" />
      </div>
      <h4 className="max-temp">{maxTemp} °C</h4>
      <h4 className="min-temp">{minTemp} °C</h4>
    </div>
  );
}
