import React, { createContext, useContext, useState } from 'react';

const AppStateContext = createContext();

export const useAppState = () => {
  return useContext(AppStateContext);
};

export const AppStateProvider = (
  { children }) => {

  const [mostrarComponente, setMostrarComponente] = useState(false);

  


  
  return (
    <AppStateContext.Provider value={{ mostrarComponente, setMostrarComponente}}>
      {children}
    </AppStateContext.Provider>
  );
};