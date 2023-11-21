import React, { createContext, useContext, useState } from 'react';

const ResponseContext = createContext();

export const useResponseContext = () => {
  const context = useContext(ResponseContext);
  if (!context) {
    throw new Error('useResponseContext must be used within a ResponseProvider');
  }
  return context;
};

export const ResponseProvider = ({ children }) => {
  const [responseCount, setResponseCount] = useState(0);

  const incrementResponseCount = () => {
    setResponseCount((prevCount) => prevCount + 1);
  };

  return (
    <ResponseContext.Provider value={{ responseCount, incrementResponseCount }}>
      {children}
    </ResponseContext.Provider>
  );
};
