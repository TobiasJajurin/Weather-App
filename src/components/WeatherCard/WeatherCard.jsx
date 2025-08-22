import { useUnit } from '../../contexts/UnitContext';
import { useLanding } from '../../contexts/LandingContext';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const { convertTemp, getUnitSymbol } = useUnit();
  const { showApp } = useLanding();

  if (!showApp || !weather) return null;

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div className="location-info">
          <h2 className="city-name">{weather.name}</h2>
          <p className="country">{weather.sys.country}</p>
          <p className="date">{formatDate(weather.dt)}</p>
        </div>
        <div className="weather-icon">
          <img 
            src={getWeatherIcon(weather.weather[0].icon)} 
            alt={weather.weather[0].description}
          />
        </div>
      </div>
      
      <div className="weather-main">
        <div className="temperature">
          <span className="temp-value">{convertTemp(Math.round(weather.main.temp))}</span>
          <span className="temp-unit">{getUnitSymbol()}</span>
        </div>
        <p className="weather-description">
          {weather.weather[0].description.charAt(0).toUpperCase() + 
           weather.weather[0].description.slice(1)}
        </p>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Feels like</span>
          <span className="detail-value">
            {convertTemp(Math.round(weather.main.feels_like))}{getUnitSymbol()}
          </span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{weather.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind</span>
          <span className="detail-value">{Math.round(weather.wind.speed)} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{weather.main.pressure} hPa</span>
        </div>
      </div>

      <div className="weather-footer">
        <p className="update-time">
          Last updated: {formatTime(weather.dt)}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
