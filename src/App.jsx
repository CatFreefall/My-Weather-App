import React from "react";
import { useState } from "react";

import "/src/styles/App.css";

import { Header } from "./components/Header";
import { CityInfo } from "./components/CityInfo";
import { Forecast } from "./components/Forecast";

export default function App() {
  return (
    <div id="page-layout">
      <Header />
      <CityInfo />

      {/* passing in props that will serve as titles */}
      <div id="forecast-displays">
        <Forecast title="Today's Hourly Forecast" sliderWidth="59em"/>
        <Forecast title="7 Day Forecast" sliderWidth="35em"/>
      </div>
    </div>
  );
}
