import { useWeather } from '../context/WeatherContext'

export default function SelectBox() {
  const { setCity, cities } = useWeather()
  const cityHandler = (e) => {
    if (e.target.value != 'select-city') {
      for (let i = 0; i < cities.length; i++) {
        if (e.target.value === cities[i].name) {
          setCity(cities[i])
        }
      }
    }
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setCity({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      })
    })
  }
  return (
    <div className="mb-10">
      <select name="cities" id="cities" onChange={cityHandler}>
        <option value="select-city">Select City</option>
        {cities.map((city) => {
          return (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}
