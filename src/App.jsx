import React from "react";

import "/src/styles/App.css";

import { Header } from "./components/Header";
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
