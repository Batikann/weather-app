import { useState } from 'react'
import { useWeather } from '../context/WeatherContext'

export default function WeatherCard() {
  const { weatherData, days } = useWeather()
  const [weatherDetail, setWeatherDetail] = useState()
  const weatherDetails = (id) => {
    for (let i = 0; i < weatherData.length; i++) {
      if (weatherData[i].id == id) {
        setWeatherDetail(weatherData[i])
      }
    }
  }
  if (weatherDetail) {
    console.log(weatherDetail)
  }
  return (
    <div className="weatherCardContainer">
      {weatherData &&
        weatherData.map((data, i) => {
          return (
            <div
              className="weatherCard"
              key={i}
              id={data.id}
              onClick={(e) => weatherDetails(e.target.id)}
            >
              <p className="pointer-events-none">
                {days[new Date(data.data.dt * 1000).getDay()]}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`}
                alt=""
                className="pointer-events-none"
              />
              <div className="pointer-events-none">
                <p className="description">
                  {data.data.weather[0].description}
                </p>
              </div>
              <div className="info">
                <p className="temp">{Math.round(data.data.main.temp)}&#176;C</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}
