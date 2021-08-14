import React, {useEffect, useState} from 'react'
import './Currency.css'
import {createReq} from '../../Utils/Request'
import {getCurrency} from '../../Utils/WeatherData'
import {format} from 'date-fns'

const Currency = () => {
  const [currencyUSD, setCurrencyUSD] = useState({})
  const [currencyEUR, setCurrencyEUR] = useState({})
  const [currencyRUB, setCurrencyRUB] = useState({})

  useEffect(() => {
    const load = async () => {

      const USD = await createReq(getCurrency('431'));
      const EUR = await createReq(getCurrency('451'));
      const RUB = await createReq(getCurrency('456'));

      setCurrencyUSD(USD)
      setCurrencyEUR(EUR)
      setCurrencyRUB(RUB)
    };

    load()
  }, [])

  return (
    <div className='currency'>
      <p>Курс валют на {format(new Date(), 'dd.MM.yyyy')}</p>
      <div className='a'>
        <p className='currency_name'>{currencyUSD.Cur_Name}:</p>
        <p>{currencyUSD.Cur_OfficialRate}</p>
      </div>
      <div className='a'>
        <p className='currency_name'>{currencyEUR.Cur_Name}:</p>
        <p>{currencyEUR.Cur_OfficialRate}</p>
      </div>
      <div className='a'>
        <p className='currency_name'>{currencyRUB.Cur_Name}:</p>
        <p>{currencyRUB.Cur_OfficialRate}</p>
      </div>
    </div>
  )
}

export default Currency