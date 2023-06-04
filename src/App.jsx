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
      <Forecast />
    </div>
  );
}
