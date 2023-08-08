import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState([]);
  const location = props.dropDownValue;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${props.apiKey}&q=${location}&days=7`
      )
      .then((response) => {
        setWeatherData(response.data.forecast.forecastday);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  console.log(props.apiKey)

  return (
    <div className="flex flex-col w-11/12 h-auto py-6 ">
      <span
        className="w-full bg-[#181818] text-center border-2 rounded-lg my-4"
      >
        {"7"}-Day Weather Forecast for: {location}, Georgia
      </span>
      <div className="flex flex-col w-full border-opacity-50">
        <ul>
          {weatherData.map((exportedData, index) => (
            <li key={index} className="mb-4">
              <div className="card bg-base-300 rounded-box p-4">
                <p>Date: {exportedData.date}</p>
                <p>Temperature: {exportedData.day.avgtemp_c}°C</p>
                <p>Weather: {exportedData.day.condition.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Weather;
