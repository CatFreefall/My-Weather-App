import React from "react";
import { useState } from "react";

import { Header } from "./components/Header";
import { CityInfo } from "./components/CityInfo";
import { Forecast } from "./components/Forecast";

export default function App() {
  return (
    <div>
      <Header />
      <CityInfo />
      <Forecast />
    </div>
  );
}
