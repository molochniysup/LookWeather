import React from 'react';
import TodayWeatherInformation from './TodayWeatherInformation';
import WeekWeatherInformation from './WeekWeatherInformation';
import './Weather.css';

const Weather = ({todayWeather, weekWeather}) => (
  <main className="weatherContainer">
    <TodayWeatherInformation todayWeather={todayWeather}/>
    <WeekWeatherInformation weekWeather={weekWeather}/>
  </main>
);

export default Weather;