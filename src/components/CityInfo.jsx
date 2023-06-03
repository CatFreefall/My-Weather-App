import React from "react";

export function CityInfo() {
  return (
    <div>
      <img src="/assets/icons/location-icon.png" alt="Map Icon"></img>
      <h1 id="city-name">Toronto | CA</h1>
      <div id="condition-icon"></div>
      <h6 id="condition">Condition:</h6>
      <h6 id="wind-speed">Wind Speed:</h6>
      <h6 id="wind angle">Wind Angle:</h6>
      <h6 id="temperature">Temperature:</h6>
    </div>
  );
}
