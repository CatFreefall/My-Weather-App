import React from "react";
import { useState } from "react";

import "/src/styles/forecast-styles/Forecast.css";
import "/src/styles/forecast-styles/splide.min.css";

import { DailyForecastInfo } from "./DailyForecastInfo";

import { Splide, SplideSlide } from "@splidejs/react-splide";

export function DailyForecast({ title, sliderWidth, weatherInfo }) {
  const forecastComponents = [];
  for (let day = 0; day < weatherInfo.day.length; day++) {
    forecastComponents.push(
      <SplideSlide className="splide-slides" key={weatherInfo.day}>
        <DailyForecastInfo
          time={weatherInfo.day[day]}
          icon={weatherInfo.icon[day]}
          maxTemp={weatherInfo.maxTemp[day]}
          minTemp={weatherInfo.minTemp[day]}
        />
      </SplideSlide>
    );
  }

  return (
    <div id="forecast" style={{ width: sliderWidth }}>
      <div id="top-rectangle">
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
      >
        {forecastComponents}
      </Splide>

      <div id="bottom-rectangle"></div>
    </div>
  );
}
