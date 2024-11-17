// basenameContext.js
import { createContext, useContext } from 'react';

// Create a context
const BasenameContext = createContext(null);

// Create a custom hook to use the context
export const useBasename = () => useContext(BasenameContext);

// Create a provider to wrap your components
export const BasenameProvider = ({ children }) => {
  const basename = ''; // Replace with actual value if needed
  return (
    <BasenameContext.Provider value={{ basename }}>
      {children}
    </BasenameContext.Provider>
  );
};
