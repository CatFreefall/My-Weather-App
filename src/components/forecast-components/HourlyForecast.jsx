import React from "react";
import { useState } from "react";

import "/src/styles/forecast-styles/Forecast.css";
import "/src/styles/forecast-styles/splide.min.css";

import { HourlyForecastInfo } from "./HourlyForecastInfo";

import { Splide, SplideSlide } from "@splidejs/react-splide";

export function HourlyForecast({ title, sliderWidth, weatherInfo }) {
  const forecastComponents = [];
  for (let hour = 0; hour < weatherInfo.time.length; hour++) {
    forecastComponents.push(
      <SplideSlide className="splide-slides" key={weatherInfo.time}>
        <HourlyForecastInfo
          condition={weatherInfo.condition[hour]}
          icon={weatherInfo.icon[hour]}
          temp={weatherInfo.temp[hour]}
          time={weatherInfo.time[hour]}
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
