import { createContext, useContext, useState } from 'react';

const LandingContext = createContext();

export const useLanding = () => {
  const context = useContext(LandingContext);
  if (!context) {
    throw new Error('useLanding must be used within a LandingProvider');
  }
  return context;
};

export const LandingProvider = ({ children }) => {
  const [showApp, setShowApp] = useState(false);

  const startUsingApp = () => {
    setShowApp(true);
  };

  const backToLanding = () => {
    setShowApp(false);
  };

  return (
    <LandingContext.Provider value={{ showApp, startUsingApp, backToLanding }}>
      {children}
    </LandingContext.Provider>
  );
};
