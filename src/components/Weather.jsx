import React from "react";
import { useEffect, useState } from "react";

import "/src/styles/Weather.css";

import { CityInfo } from "./CityInfo";
import { HourlyForecast } from "./forecast-components/HourlyForecast";
import { DailyForecast } from "./forecast-components/DailyForecast";

export const Weather = ({ city }) => {
  const [currentData, setCurrentData] = useState(null);
  const [dataByHours, setDataByHours] = useState(null);
  const [dayForecast, setDayForecast] = useState(null);

  useEffect(() => {
    const fetchWeather = async (location) => {
      const options = {
        method: "GET",
      };

      const host = "http://api.weatherapi.com/v1/forecast.json?";
      const key = "c9ea430da233494d80d231236222412";
      const city = location;
      const days = "3";
      const callURL =
        host +
        "key=" +
        key +
        "&q=" +
        city +
        "&days=" +
        days +
        "&aqi=no&alerts=no";

      try {
        const response = await fetch(callURL, options);
        const currentWeather = await response.json();
        return currentWeather;
      } catch (error) {
        console.log(error);
      }
    };

    const sortCurrentData = async () => {
      const weatherData = await fetchWeather(city);

      const currentData = {
        cityName:
          weatherData.location.name + " | " + weatherData.location.country,
        icon: weatherData.current.condition.icon,
        condition: weatherData.current.condition.text,
        windSpeed: weatherData.current.wind_kph + " km/h",
        temperature: weatherData.current.temp_c + " °C",
        windDirection: weatherData.current.wind_dir,
      };

      const hourlyData = {
        time: [],
        temp: [],
        condition: [],
        icon: [],
      };
      const hourNumber = weatherData.forecast.forecastday[0].hour;
      hourNumber.forEach((hour) => {
        hourlyData.time.push(hour.time);
        hourlyData.temp.push(hour.temp_c);
        hourlyData.condition.push(hour.condition.text);
        hourlyData.icon.push(hour.condition.icon);
      });

      const dayForecast = {
        day: [],
        maxTemp: [],
        minTemp: [],
        icon: [],
      };
      const dayNumber = weatherData.forecast.forecastday;
      dayNumber.forEach((day) => {
        dayForecast.day.push(day.date);
        dayForecast.maxTemp.push(day.day.maxtemp_c);
        dayForecast.minTemp.push(day.day.mintemp_c);
        dayForecast.icon.push(day.day.condition.icon);
      });

      setCurrentData(currentData);
      setDataByHours(hourlyData);
      setDayForecast(dayForecast);
    };

    sortCurrentData();
  }, [city]);

  //Waiting for fetch to complete
  if (!currentData | !dataByHours) {
    return <CityInfo />;
  }

  return (
    <>
      <CityInfo
        cityName={currentData.cityName}
        condIcon={currentData.icon}
        cond={currentData.condition}
        windSpeed={currentData.windSpeed}
        temp={currentData.temperature}
        windDirection={currentData.windDirection}
      />
      {/* passing in props that will serve as titles */}
      <div id="forecast-displays">
        <HourlyForecast
          title="Today's Hourly Forecast"
          sliderWidth="50em"
          weatherInfo={dataByHours}
        />
        <DailyForecast
          title="3 Day Forecast"
          sliderWidth="24em"
          weatherInfo={dayForecast}
        />
      </div>
    </>
  );
};
