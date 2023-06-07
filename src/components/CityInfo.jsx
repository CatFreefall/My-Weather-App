import React from "react";

import "/src/styles/CityInfo.css";

export function CityInfo({
  cityName,
  condIcon,
  cond,
  windSpeed,
  temp,
  windDirection,
}) {
  return (
    <div id="city-info">
      <div id="city-name">
        <img src="/assets/icons/location-icon.png" alt="Map Icon"></img>
        <h1>{cityName}</h1>
      </div>
      <div id="condition-icon">
        <img src={condIcon} alt="Icon for Weather Condition"></img>
      </div>
      <h6 id="condition">Condition: {cond}</h6>
      <h6 id="wind-speed">Wind Speed: {windSpeed}</h6>
      <h6 id="temperature">Temperature: {temp}</h6>
      <h6 id="wind-direction">Wind Direction: {windDirection}</h6>
    </div>
  );
}
