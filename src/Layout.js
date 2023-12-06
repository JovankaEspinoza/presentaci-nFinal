import { Outlet } from "react-router-dom";

import React from 'react';
import Navbars from "./pages/componentes/Navbars";
import { AppStateProvider } from './pages/componentes/AppStateContext';
import { CarritoProvider } from './pages/componentes/CarritoContext';


const Layout = () => {
  

  return (
      <>
        <CarritoProvider>
        <AppStateProvider>
          <Navbars/>
            
          <Outlet></Outlet>
        </AppStateProvider>
        </CarritoProvider>

         
      
      </>
    )
  };

export default Layout;
