import React from "react";

import "/src/styles/Forecast.css";
import "/src/styles/forecast-info-components/splide.min.css";

import { ForecastInfo } from "./forecast-info-components/ForecastInfo";

import { Splide, SplideSlide } from "@splidejs/react-splide";

export function Forecast({ title, sliderWidth }) {
  return (
    <div id="forecast" style={{ width: sliderWidth }}>
      <div id="top-rectangle">
        <h2>{title}</h2>
      </div>
      <div id="splide-slider">
        <Splide
          aria-label="My Favorite Images"
          options={{
            fixedWidth: "10rem",
            fixedHeight: "6rem",
            gap: "1.5em",
            padding: "1.5em",
          }}
        >
          <SplideSlide className="slide">
            <ForecastInfo />
          </SplideSlide>
          <SplideSlide className="slide">
            <ForecastInfo />
          </SplideSlide>
          <SplideSlide className="slide">
            <ForecastInfo />
          </SplideSlide>
          <SplideSlide className="slide">
            <ForecastInfo />
          </SplideSlide>
          <SplideSlide className="slide">
            <ForecastInfo />
          </SplideSlide>
          <SplideSlide className="slide">
            <ForecastInfo />
          </SplideSlide>
          <SplideSlide className="slide">
            <ForecastInfo />
          </SplideSlide>
          <SplideSlide className="slide">
            <ForecastInfo />
          </SplideSlide>
          <SplideSlide className="slide">
            <ForecastInfo />
          </SplideSlide>
          <SplideSlide className="slide">
            <ForecastInfo />
          </SplideSlide>
          <SplideSlide className="slide">
            <ForecastInfo />
          </SplideSlide>
          <SplideSlide className="slide">
            <ForecastInfo />
          </SplideSlide>
        </Splide>
      </div>
      <div id="bottom-rectangle"></div>
    </div>
  );
}
