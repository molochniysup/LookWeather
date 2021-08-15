import React, {useEffect, useState} from 'react'
import countryList from 'country-list';
import "./TodayWeatherInformaion.css";
import {getLocalTime} from '../../App'

const ITEM = 0;
const MONTH = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
export const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const TodayWeatherInformation = ({ todayWeather }) => {
  const { timezone, name, sys: { country }, main: { temp, feels_like, humidity }, weather, wind: { speed } } = todayWeather

  const getCurrentTime = getLocalTime(timezone);
  const localDay = getCurrentTime.getUTCDay();
  const localDate = getCurrentTime.getUTCDate();
  const localMonth = getCurrentTime.getMonth();
  const localYear = getCurrentTime.getUTCFullYear();
  const localHours = getCurrentTime.getUTCHours();
  const localMinutes = getCurrentTime.getUTCMinutes();
  const localSeconds = getCurrentTime.getUTCSeconds();
  const [seconds, setSeconds] = useState(localSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const getFormatTime = (time) => time < 10 ? `0${time}` : time;

  return (
    <div className="container container">
      <p
        className="city">{name}, {countryList.getName(country)}
      </p>
      <p
        className="date">{DAYS[localDay]} {localDate} {MONTH[localMonth]} {localYear} {getFormatTime(localHours)}:{getFormatTime(localMinutes)}:{getFormatTime(localSeconds)}</p>
      <div className="dataTemp">
        <div className="tempContainer">
          <p className="temp">{Math.floor(temp - 273)}°</p>
          <img className="tempIcon"
               src={`./../../../../weather-icons/${weather[ITEM].icon}.svg`} alt="" />
          <div className="overcast">
            <p className="overcastTemp">overcast</p>
            <p className="overcastTemp">feels
              like: {Math.floor(feels_like - 273)}°</p>
            <p className="overcastTemp">wind: {speed} m/s</p>
            <p className="overcastTemp">humidity: {humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayWeatherInformation;
