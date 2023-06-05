import React from "react";

import "/src/styles/forecast-info-components/ForecastInfo.css";

export function ForecastInfo() {
  return (
    <div id="forecast-info">
      <div>
        <h4 id="single-panel">
          time
        </h4>
      </div>
      <div id="weather-icon"></div>
      <h4 id="max-temp">max-temp</h4>
      <h4 id="min-temp">min-temp</h4>
    </div>
  );
}