import { useLanding } from '../../contexts/LandingContext';
import './ErrorMessage.css';

const ErrorMessage = ({ message }) => {
  const { showApp } = useLanding();

  if (!showApp || !message) return null;

  return (
    <div className="error-container">
      <div className="error-message">
        <span className="error-icon">⚠️</span>
        <p className="error-text">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
