import React from "react";
import { useState } from "react";

import "/src/styles/App.css";

import { Header } from "./components/Header";
import { CityInfo } from "./components/CityInfo";
import { Forecast } from "./components/Forecast";
import { Weather } from "./components/Weather";

export default function App() {
  return (
    <div id="page-layout">
      <Header />
      {/*TODO: MAKE SEARCH BAR FUNCTIONAL LATER AND PASS THE USER INPUT AS A PROP HERE*/}
      <Weather city={"Toronto"} />
    </div>
  );
}
