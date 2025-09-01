import { useState } from 'react';
import { useWeather } from '../../contexts/WeatherContext';
import { useLanding } from '../../contexts/LandingContext';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { fetchWeather, getCurrentLocation, loading } = useWeather();
  const { showApp } = useLanding();

  if (!showApp) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchWeather(query.trim());
    }
  };

  const handleLocationClick = () => {
    getCurrentLocation();
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-group">
          <div className="search-input-wrapper">
            <span className="search-icon" aria-hidden></span>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar ciudad..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={loading}
            />
          </div>
          <button 
            type="submit" 
            className="search-button"
            disabled={loading || !query.trim()}
            aria-label="Buscar"
          >
            Buscar
          </button>
          <button 
            type="button"
            className="location-button"
            onClick={handleLocationClick}
            disabled={loading}
            aria-label="Usar ubicación actual"
          >
             Ubicación
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
