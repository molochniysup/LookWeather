import React from 'react';
import {DAYS} from './TodayWeatherInformation';
import './WeekWeather.css';

const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];
const MILLISECONDS = 1000;

const getLocalTime = (dt) => {
  return new Date(dt * MILLISECONDS);
};

const WeekWeatherInformation = (weekWeather) => {
  const filteredDays = weekWeather.weekWeather.list.filter((weather) => (getLocalTime(weather.dt).getUTCHours() === 9)).map((day, index) => {
    const getCurrentTime = getLocalTime(day.dt);

    return {
      ...day,
      id: index,
      localDay: getCurrentTime.getUTCDay(),
      localDate: getCurrentTime.getUTCDate(),
      localMonth: getCurrentTime.getMonth(),
    };
  });

  return (
    <div className="forecastContainer">
      {filteredDays.map(day => {
        return (
          <div key={day.id}>
            <p
              className="tempData">{DAYS[day.localDay]} {day.localDate} {MONTH[day.localMonth]}</p>
            <div className="tempCont">
              <p>{Math.floor(day.main.temp)}°</p>
              <img src={`./../../../../weather-icons/${day.weather[0].icon}.svg`} className="weatherIcon"
                   alt='weather-icon'/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeekWeatherInformation;