import React from "react";
import { useRef, useEffect } from "react";

import "/src/styles/forecast-styles/Forecast.css";
import "/src/styles/forecast-styles/splide.min.css";

import { HourlyForecastInfo } from "./HourlyForecastInfo";

import { Splide, SplideSlide } from "@splidejs/react-splide";

export function HourlyForecast({ title, sliderWidth, weatherInfo }) {
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

  const forecastComponents = weatherInfo.time.map((time, index) => (
    <SplideSlide className="splide-slides" key={time}>
      <HourlyForecastInfo
        condition={weatherInfo.condition[index]}
        icon={weatherInfo.icon[index]}
        temp={weatherInfo.temp[index]}
        time={time}
      />
    </SplideSlide>
  ));

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
        ref={splideRef}
      >
        {forecastComponents}
      </Splide>

      <div id="bottom-rectangle"></div>
    </div>
  );
}
