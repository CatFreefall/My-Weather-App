import React from "react";

import "/src/styles/Forecast.css";

import { ForecastInfo } from "./forecast-info-components/ForecastInfo";

export function Forecast({ title }) {
  return (
    <div id="forecast">
      <div id="top-rectangle">
        <h2>{title}</h2>
      </div>
      <ForecastInfo />
      <div id="bottom-rectangle"></div>
    </div>
  );
}
