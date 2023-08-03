import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => { // Receive apiKey as a prop
  const [weatherData, setWeatherData] = useState([]);
  const location = 'Zugdidi,GE'; // Use the location parameter as per WeatherAPI documentation
  
  const apiKey = 'df711456495b4ec2872175159230308'

  useEffect(() => {
    axios
      .get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7`)
      .then((response) => {
        setWeatherData(response.data.forecast.forecastday);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);



  console.log(weatherData)


  return (
    
    <div className='w-11/12 h-auto py-6'>
      <h2> {"{unset}"}-Day Weather Forecast for Zugdidi, Georgia</h2>
      <ul>
        {weatherData.map((dayData, index) => (
          <li key={index}>
            <p>Date: {dayData.date}</p>
            <p>Temperature: {dayData.day.avgtemp_c}°C</p>
            <p>Weather: {dayData.day.condition.text}</p>
            {/* You can display more weather details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Weather;
