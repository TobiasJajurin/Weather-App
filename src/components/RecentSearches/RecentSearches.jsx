import { useWeather } from '../../contexts/WeatherContext';
import { useUnit } from '../../contexts/UnitContext';
import './RecentSearches.css';

const RecentSearches = () => {
  const { recentSearches, fetchWeather } = useWeather();
  const { convertTemp, getUnitSymbol } = useUnit();

  if (recentSearches.length === 0) {
    return null;
  }

  return (
    <div className="recent-searches">
      <h3 className="recent-searches-title">Últimas búsquedas</h3>
      <div className="recent-searches-list">
        {recentSearches.map((city, index) => (
          <button
            key={index}
            className="recent-search-item"
            onClick={() => fetchWeather(city)}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
