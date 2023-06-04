import React from "react";

import "/src/styles/CityInfo.css";

export function CityInfo() {
  return (
    <div id="city-info">
      <div id="city-name">
        <img src="/assets/icons/location-icon.png" alt="Map Icon"></img>
        <h1>Toronto | CA</h1>
      </div>
      <div id="condition-icon"></div>
      <h6 id="condition">Condition:</h6>
      <h6 id="wind-speed">Wind Speed:</h6>
      <h6 id="temperature">Temperature:</h6>
      <h6 id="wind-angle">Wind Angle:</h6>
    </div>
  );
}
