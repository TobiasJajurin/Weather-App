import { ThemeProvider } from './contexts/ThemeContext';
import { UnitProvider } from './contexts/UnitContext';
import { WeatherProvider } from './contexts/WeatherContext';
import { LandingProvider } from './contexts/LandingContext';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import RecentSearches from './components/RecentSearches/RecentSearches';
import WeatherCard from './components/WeatherCard/WeatherCard';
import ForecastList from './components/ForecastList/ForecastList';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import LandingPage from './components/LandingPage/LandingPage';
import { useWeather } from './contexts/WeatherContext';
import { useLanding } from './contexts/LandingContext';
import './App.css';

const WeatherApp = () => {
  const { currentWeather, forecast, loading, error } = useWeather();
  const { showApp } = useLanding();

  if (!showApp) {
    return <LandingPage />;
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <SearchBar />
        <RecentSearches />
        {error && <ErrorMessage message={error} />}
        {loading && <LoadingSpinner />}

        {!loading && !error && currentWeather && (
          <div className="dashboard-grid">
            <div className="dashboard-left">
              <WeatherCard weather={currentWeather} />
            </div>
            <div className="dashboard-right">
              {forecast && <ForecastList forecast={forecast} />}
            </div>
          </div>
        )}

        {!loading && !error && !currentWeather && (
          <div className="welcome-message">
            <h2>App del Clima</h2>
            <p>Obtén información del clima en tiempo real para cualquier ciudad del mundo. Busca tu ubicación o usa tu posición actual para comenzar a explorar el clima.</p>
          </div>
        )}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <UnitProvider>
        <WeatherProvider>
          <LandingProvider>
            <WeatherApp />
          </LandingProvider>
        </WeatherProvider>
      </UnitProvider>
    </ThemeProvider>
  );
};

export default App;
