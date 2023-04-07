import SelectBox from './components/SelectBox'
import WeatherCard from './components/WeatherCard'
import { WeatherProvider } from './context/WeatherContext'

function App() {
  return (
    <div className="bg-blue-400 min-h-screen flex items-center w-full flex-col">
      <WeatherProvider>
        <SelectBox />
        <WeatherCard />
      </WeatherProvider>
    </div>
  )
}

export default App
