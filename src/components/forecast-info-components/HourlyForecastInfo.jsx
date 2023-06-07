import React from "react";

import "/src/styles/forecast-info-components/HourlyForecastInfo.css";

export function HourlyForecastInfo({ condition, icon, temp, time }) {
  return (
    <div className="forecast-info">
      <div>
        <h4 className="panel-top-rectangle">
          {time.split(" ")[1]}
        </h4>
      </div>
      <img className="weather-icon" src={icon} alt="weather-icon" />
      <h4 className="condition">{condition}</h4>
      <h4 className="temp">{temp}</h4>
    </div>
  );
}