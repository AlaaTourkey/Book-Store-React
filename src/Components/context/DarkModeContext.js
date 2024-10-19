// src/context/DarkModeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create DarkModeContext
export const DarkModeContext = createContext();

// Create a provider component
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode and save preference to local storage
  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
    localStorage.setItem('darkMode', checked);
  };

  // Load dark mode preference from local storage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    document.documentElement.classList.toggle('dark', savedDarkMode);
  }, []);

  // Update the 'dark' class on the <html> element whenever dark mode changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
