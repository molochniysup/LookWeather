import React, {useCallback, useEffect, useState} from 'react'
import {createReq} from './Utils/Request'
import {DEFAULT_CITY, DEFAULT_POSITION, getUrlWeatherByCity, getUrlWeatherByPosition} from './Utils/WeatherData'
import Weather from './Components/WeatherInformation/Weather'
import Header from './Components/Header/Header'
import './App.css'
import Preloader from './Components/Preloader/Preloader'
import Currency from './Components/Currency/Currency'

import defaultBackgroundImage from './Assets/img/background.jpg'

const MILLISECONDS = 1000;

export const getLocalTime = (tz) => {
  return new Date(Date.now() + tz * MILLISECONDS);
};

const App = () => {
  const [todayWeather, setTodayWeather] = useState()
  const [weekWeather, setWeekWeather] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const load = async () => {
      setIsLoading(true)

      const todayWeather = await createReq(getUrlWeatherByCity(DEFAULT_CITY))
      const weekWeather = await createReq(getUrlWeatherByPosition(DEFAULT_POSITION))

      setWeekWeather(weekWeather)
      setTodayWeather(todayWeather)
      setIsLoading(false)
    }

    load()
  }, [])

  const search = useCallback(async (city) => {
    const todayWeather = await createReq(getUrlWeatherByCity(city), setIsLoading(true))

    if (todayWeather.cod !== 200) {
      setIsLoading(false)
      return
    }

    const weekWeather = await createReq(getUrlWeatherByPosition(todayWeather))

    setIsLoading(false)
    setTodayWeather(todayWeather)
    setWeekWeather(weekWeather)
  }, [setTodayWeather, setWeekWeather, setIsLoading])

  return (
    <div className="App" >
      {isLoading && <Preloader/>}
      <Header search={search}/>
      {todayWeather && weekWeather && <Weather todayWeather={todayWeather} weekWeather={weekWeather}/>}
      <Currency/>
    </div>
  )
}

export default App
