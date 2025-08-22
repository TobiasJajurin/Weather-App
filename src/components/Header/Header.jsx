import { useTheme } from '../../contexts/ThemeContext';
import { useUnit } from '../../contexts/UnitContext';
import { useLanding } from '../../contexts/LandingContext';
import './Header.css';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { isCelsius, toggleUnit } = useUnit();
  const { showApp, backToLanding } = useLanding();

  if (!showApp) return null;

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button className="back-button" onClick={backToLanding}>
            <span className="back-icon">←</span>
            Back to Landing
          </button>
          <h1 className="header-title">Weather App</h1>
        </div>
        <div className="header-controls">
          <button 
            className={`unit-toggle ${isCelsius ? 'active' : ''}`}
            onClick={toggleUnit}
          >
            {isCelsius ? '°C' : '°F'}
          </button>
          <button 
            className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
            onClick={toggleTheme}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
