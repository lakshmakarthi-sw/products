import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isToggled, setIsToggled] = useState(true);

  const handleSearch = (query) => {
    setSearchQuery(query); 
  };

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  console.log('AppProvider render: isToggled =', searchQuery); // Log the current state of isToggled

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        isToggled,
        handleSearch,
        handleToggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 4. Custom Hook for consumption
export const useApp = () => useContext(AppContext);