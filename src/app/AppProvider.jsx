import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isToggled, setIsToggled] = useState(!navigator.userAgentData.mobile);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleToggle = (toggle) => {
    setIsToggled(() => toggle);
  };

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

export const useApp = () => useContext(AppContext);