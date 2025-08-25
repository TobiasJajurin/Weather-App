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
          <input
            type="text"
            className="search-input"
            placeholder="Search for a city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={loading}
          />
          <button 
            type="submit" 
            className="search-button"
            disabled={loading || !query.trim()}
          >
            {loading ? '🔍' : 'Search'}
          </button>
        </div>
      </form>
      <button 
        className="location-button"
        onClick={handleLocationClick}
        disabled={loading}
      >
        Current Location
      </button>
    </div>
  );
};

export default SearchBar;
