import React from "react";
import { useEffect, useState } from "react";

import { CityInfo } from "./CityInfo";

export const Weather = ({ city }) => {
  const [currentData, setCurrentData] = useState(null);
  const [dataByHours, setDataByHours] = useState({
    time: [],
    temp: [],
    condition: [],
    icon: [],
  });

  useEffect(() => {
    const fetchWeather = async (location) => {
      const options = {
        method: "GET",
      };

      const host = "http://api.weatherapi.com/v1/forecast.json?";
      const key = "c9ea430da233494d80d231236222412";
      const city = location;
      const days = "1";
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

    const sortWeatherData = async () => {
      const weatherData = await fetchWeather(city);
      const hourlyData = {
        time: [],
        temp: [],
        condition: [],
        icon: [],
      };

      const currentData = {
        cityName:
          weatherData.location.name + " | " + weatherData.location.country,
        icon: weatherData.current.condition.icon,
        condition: weatherData.current.condition.text,
        windSpeed: weatherData.current.wind_kph + " km/h",
        temperature: weatherData.current.temp_c + "°C",
        windDirection: weatherData.current.wind_dir,
      };

      const dataByHours = weatherData.forecast.forecastday[0].hour;
      dataByHours.forEach((hour) => {
        hourlyData.time.push(hour.time);
        hourlyData.temp.push(hour.temp_c);
        hourlyData.condition.push(hour.condition.text);
        hourlyData.icon.push(hour.condition.icon);
      });

      setCurrentData(currentData);
      setDataByHours(hourlyData);
    };

    sortWeatherData();
  }, []);

  //Waiting for fetch to complete and currentData to be set
  if (!currentData) {
    return <CityInfo />;
  }

  return (
    <CityInfo
      cityName={currentData.cityName}
      condIcon={currentData.icon}
      cond={currentData.condition}
      windSpeed={currentData.windSpeed}
      temp={currentData.temperature}
      windDirection={currentData.windDirection}
    />
  );
};
