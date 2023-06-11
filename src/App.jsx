import React from "react";
import { useEffect } from "react";

import "/src/styles/App.css";

import { Header } from "./components/Header";
import { Weather } from "./components/Weather";

export default function App() {
  const [city, setCity] = React.useState("Toronto");
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const searchCity = (city) => {
    setCity(city);
  };

  return (
    <div id="page-layout">
      <Header
        onSearch={searchCity}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Weather city={city} darkMode={darkMode} />
    </div>
  );
}
