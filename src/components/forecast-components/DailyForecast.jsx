import React from "react";
import { useRef, useEffect } from "react";

import "/src/styles/forecast-styles/Forecast.css";
import "/src/styles/forecast-styles/splide.min.css";

import { DailyForecastInfo } from "./DailyForecastInfo";

import { Splide, SplideSlide } from "@splidejs/react-splide";

export function DailyForecast({ title, sliderWidth, weatherInfo, darkMode }) {
  const splideRef = useRef(null);

  // Remove all slides from the Splide component
  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;
      if (splideInstance) {
        splideInstance.destroy();
        splideInstance.mount();
      }
    }
  }, [weatherInfo]);

  // function to create a splide slide for each day in the forecast
  const forecastComponents = weatherInfo.day.map((day, index) => (
    <SplideSlide className="splide-slides" key={day}>
      <DailyForecastInfo
        time={day}
        icon={weatherInfo.icon[index]}
        maxTemp={weatherInfo.maxTemp[index]}
        minTemp={weatherInfo.minTemp[index]}
        darkMode={darkMode}
      />
    </SplideSlide>
  ));

  return (
    <div
      id="forecast"
      style={{ width: sliderWidth }}
      className={darkMode ? "dark-mode-forecast" : null}
    >
      <div className="top-rectangle" id={darkMode ? "dark-mode-rect" : null}>
        <h2>{title}</h2>
      </div>

      <Splide
        id="carousel"
        aria-label="Forecast Panels"
        options={{
          fixedWidth: "9rem",
          gap: "1.5em",
          padding: "1.5em",
          releaseWheel: true,
        }}
        ref={splideRef}
      >
        {forecastComponents}
      </Splide>

      <div
        className="bottom-rectangle"
        id={darkMode ? "dark-mode-rect" : null}
      ></div>
    </div>
  );
}
