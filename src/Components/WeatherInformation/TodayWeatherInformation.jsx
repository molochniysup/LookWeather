import React from 'react';
import * as countryList from 'country-list';
import "./TodayWeatherInformaion.css";

const ITEM = 0;
const MILLISECONDS = 1000;
const MONTH = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
export const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getLocalTime = (tz) => {
  return new Date(Date.now() + tz * MILLISECONDS);
};

const TodayWeatherInformation = (todayWeather) => {
  const getCurrentTime = getLocalTime(todayWeather.todayWeather.timezone);
  const localDay = getCurrentTime.getUTCDay();
  const localDate = getCurrentTime.getUTCDate();
  const localMonth = getCurrentTime.getMonth();
  const localYear = getCurrentTime.getUTCFullYear();
  const localHours = getCurrentTime.getUTCHours();
  const localMinutes = getCurrentTime.getUTCMinutes();
  const localSeconds = getCurrentTime.getUTCSeconds();
  const [seconds, setSeconds] = React.useState(localSeconds);
console.log(1234);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const getFormatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="container container">
      <p
        className="city">{todayWeather.todayWeather.name}, {countryList.getName(todayWeather.todayWeather.sys.country)}
      </p>
      <p
        className="date">{DAYS[localDay]} {localDate} {MONTH[localMonth]} {localYear} {getFormatTime(localHours)}:{getFormatTime(localMinutes)}:{getFormatTime(localSeconds)}</p>
      <div className="dataTemp">
        <div className="tempContainer">
          <p className="temp">{Math.floor(todayWeather.todayWeather.main.temp - 273)}°</p>
          <img className="tempIcon"
               src={`./../../../../weather-icons/${todayWeather.todayWeather.weather[ITEM].icon}.svg`} alt="" />
          <div className="overcast">
            <p className="overcastTemp">overcast</p>
            <p className="overcastTemp">feels
              like: {Math.floor(todayWeather.todayWeather.main.feels_like - 273)}°</p>
            <p className="overcastTemp">wind: {todayWeather.todayWeather.wind.speed} m/s</p>
            <p className="overcastTemp">humidity: {todayWeather.todayWeather.main.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayWeatherInformation;
