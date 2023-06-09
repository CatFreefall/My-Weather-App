import React from "react";

import "/src/styles/App.css";

import { Header } from "./components/Header";
import { Weather } from "./components/Weather";

export default function App() {
  const [city, setCity] = React.useState("Toronto");

  const searchCity = (city) => {
    setCity(city);
  };

  return (
    <div id="page-layout">
      <Header onSearch={searchCity} />
      {/*TODO: MAKE SEARCH BAR FUNCTIONAL LATER AND PASS THE USER INPUT AS A PROP HERE*/}
      <Weather city={city} />
    </div>
  );
}
