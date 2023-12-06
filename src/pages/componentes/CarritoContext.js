import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [numeroDeElementosEnCarrito, setNumeroDeElementosEnCarrito] = useState(0);

  const actualizarCarrito = (nuevoNumero) => {
    setNumeroDeElementosEnCarrito(nuevoNumero);
  };

  return (
    <CarritoContext.Provider value={{ numeroDeElementosEnCarrito, actualizarCarrito}}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};