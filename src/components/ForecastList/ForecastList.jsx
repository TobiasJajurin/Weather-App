import { useUnit } from '../../contexts/UnitContext';
import { useLanding } from '../../contexts/LandingContext';
import './ForecastList.css';

const ForecastList = ({ forecast }) => {
  const { convertTemp, getUnitSymbol } = useUnit();
  const { showApp } = useLanding();

  if (!showApp || !forecast) return null;

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const getWeatherEmoji = (weather) => {
    const main = (weather?.main || '').toLowerCase();
    const id = weather?.id || 0;
    if (main.includes('thunder') || (id >= 200 && id < 300)) return '⛈️';
    if (main.includes('drizzle') || (id >= 300 && id < 400)) return '🌧️';
    if (main.includes('rain') || (id >= 500 && id < 600)) return '🌦️';
    if (main.includes('snow') || (id >= 600 && id < 700)) return '❄️';
    if (main.includes('mist') || main.includes('fog') || (id >= 700 && id < 800)) return '🌫️';
    if (id === 800 || main.includes('clear')) return '☀️';
    if (id > 800 || main.includes('cloud')) return '☁️';
    return '🌡️';
  };

  const formatDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const groupForecastByDay = (forecastList) => {
    const grouped = {};
    
    forecastList.forEach(item => {
      const date = new Date(item.dt * 1000).toDateString();
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });

    return Object.values(grouped).map(dayForecasts => {
      const avgTemp = dayForecasts.reduce((sum, item) => sum + item.main.temp, 0) / dayForecasts.length;
      const avgFeelsLike = dayForecasts.reduce((sum, item) => sum + item.main.feels_like, 0) / dayForecasts.length;
      const avgHumidity = dayForecasts.reduce((sum, item) => sum + item.main.humidity, 0) / dayForecasts.length;
      const minTemp = dayForecasts.reduce((min, item) => Math.min(min, item.main.temp_min ?? item.main.temp), Infinity);
      const maxTemp = dayForecasts.reduce((max, item) => Math.max(max, item.main.temp_max ?? item.main.temp), -Infinity);
      
      const mostFrequentWeather = dayForecasts.reduce((acc, item) => {
        const weatherId = item.weather[0].id;
        acc[weatherId] = (acc[weatherId] || 0) + 1;
        return acc;
      }, {});
      
      const dominantWeatherId = Object.keys(mostFrequentWeather).reduce((a, b) => 
        mostFrequentWeather[a] > mostFrequentWeather[b] ? a : b
      );
      
      const dominantWeather = dayForecasts.find(item => item.weather[0].id == dominantWeatherId).weather[0];
      
      return {
        dt: dayForecasts[0].dt,
        temp: avgTemp,
        feels_like: avgFeelsLike,
        humidity: Math.round(avgHumidity),
        weather: dominantWeather,
        min: minTemp,
        max: maxTemp
      };
    });
  };

  const dailyForecast = groupForecastByDay(forecast.list);

  return (
    <div className="forecast-container">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-list">
        {dailyForecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <div className="forecast-date">
              <span className="forecast-day">{formatDay(day.dt)}</span>
              <span className="forecast-date-num">{formatDate(day.dt)}</span>
            </div>
            
            <div className="forecast-weather">
              <span className="forecast-emoji" aria-hidden>
                {getWeatherEmoji(day.weather)}
              </span>
              <span className="forecast-description">
                {day.weather.description}
              </span>
            </div>
            
            <div className="forecast-temp">
              <span className="forecast-temp-value">
                {convertTemp(Math.round(day.temp))}{getUnitSymbol()}
              </span>
              <div className="temp-range">
                <span className="min">{convertTemp(Math.round(day.min))}{getUnitSymbol()}</span>
                <div className="range-bar">
                  <div
                    className="range-fill"
                    style={{
                      ['--min'] : `${day.min}`,
                      ['--max'] : `${day.max}`
                    }}
                  />
                </div>
                <span className="max">{convertTemp(Math.round(day.max))}{getUnitSymbol()}</span>
              </div>
            </div>
            
            <div className="forecast-details">
              <div className="forecast-detail">
                <span className="detail-label">Feels like</span>
                <span className="detail-value">
                  {convertTemp(Math.round(day.feels_like))}{getUnitSymbol()}
                </span>
              </div>
              <div className="forecast-detail">
                <span className="detail-label">Humidity</span>
                <span className="detail-value">{day.humidity}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
