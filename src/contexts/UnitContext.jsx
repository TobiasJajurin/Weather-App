import { createContext, useContext, useState, useEffect } from 'react';

const UnitContext = createContext();

export const useUnit = () => {
  const context = useContext(UnitContext);
  if (!context) {
    throw new Error('useUnit must be used within a UnitProvider');
  }
  return context;
};

export const UnitProvider = ({ children }) => {
  const [isCelsius, setIsCelsius] = useState(() => {
    const saved = localStorage.getItem('unit');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('unit', JSON.stringify(isCelsius));
  }, [isCelsius]);

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const convertTemp = (temp) => {
    if (isCelsius) return temp;
    return Math.round((temp * 9/5) + 32);
  };

  const getUnitSymbol = () => isCelsius ? '°C' : '°F';

  return (
    <UnitContext.Provider value={{ isCelsius, toggleUnit, convertTemp, getUnitSymbol }}>
      {children}
    </UnitContext.Provider>
  );
};
