import { createContext, useContext, useEffect, useState } from 'react'
import cities from '../data/cities.json'
import { nanoid } from 'nanoid'

const WeatherContext = createContext()
const URL = 'https://api.openweathermap.org/data/2.5/forecast?'
export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([])
  const [city, setCity] = useState()
  const arr = []
  useEffect(() => {
    if (city) {
      fetch(
        `${URL}lat=${city?.latitude}&lon=${city?.longitude}&appid=${
          import.meta.env.VITE_REACT_API_URL
        }&units=metric&exclude=current,minutely,hourly&lang=tr`
      )
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.list.length; i += 8) {
            arr.push({
              id: nanoid(),
              cityName: data.city.name,
              data: data.list[i],
            })
            setWeatherData(arr)
            console.log(data)
          }
        })
    }
  }, [city])
  const days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
  ]
  const values = {
    weatherData,
    setWeatherData,
    cities,
    setCity,
    city,
    days,
    arr,
  }

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  )
}

export const useWeather = () => useContext(WeatherContext)
