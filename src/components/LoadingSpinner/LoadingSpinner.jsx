import { useLanding } from '../../contexts/LandingContext';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  const { showApp } = useLanding();

  if (!showApp) return null;

  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p className="loading-text">Loading weather data...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
