import { GrFormClose } from 'react-icons/gr'
import {
  WiBarometer,
  WiStrongWind,
  WiDirectionUpRight,
  WiThermometerExterior,
  WiThermometer,
  WiHumidity,
} from 'react-icons/wi'
import '../style/modal.css'

export default function Modal({ open, weatherDetail, onClose }) {
  if (!open) return null
  return (
    <div className="overlay">
      <div className="modalContainer">
        <img
          src={`https://openweathermap.org/img/wn/${weatherDetail?.data?.weather[0].icon}@2x.png`}
          alt=""
          className="pointer-events-none"
        />
        <div className="modalRight">
          <GrFormClose className="close-btn" size={25} onClick={onClose} />
          <div className="content">
            <div className="pressure">
              <h3>Basınç</h3>
              <p className="detail">
                <WiBarometer size={25} />
                {weatherDetail?.data?.main?.pressure}hPa
              </p>
            </div>
            <div className="wind">
              <h3>Rüzgar Hızı</h3>
              <p className="detail">
                <WiStrongWind size={25} />
                {weatherDetail?.data?.wind?.speed}km/sa
              </p>
              <p className="detail">
                <WiDirectionUpRight size={25} />
                {weatherDetail?.data?.wind?.deg}
              </p>
            </div>
            <div className="temp-container">
              <h3>Sıcaklık</h3>
              <p className="detail">
                <WiThermometerExterior size={25} />
                {weatherDetail?.data?.main?.temp_min.toFixed(0)}&#176;C
              </p>
              <p className="detail">
                <WiThermometer size={25} />
                {weatherDetail?.data?.main?.temp_max.toFixed(0)}&#176;C
              </p>
            </div>
            <div className="humidity">
              <h3>Nem</h3>
              <p className="detail">
                <WiHumidity size={25} />%{weatherDetail?.data?.main?.humidity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
