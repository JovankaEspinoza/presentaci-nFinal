import React, { useState, useEffect } from 'react';

import Footer from './componentes/Footer';
import ControlledCarousel from './componentes/Carrusel';
import Incentivos from './componentes/Incentivos';
import Galeria from './componentes/galeria';
import PopupAd from './componentes/popup';
import AD from './componentes/fotos/ad.png'

function HomePage() {
  const [backgroundColor, setBackgroundColor] = useState('rgb(237, 121, 229)');
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundColor((prevColor) => (prevColor === 'rgb(237, 121, 229)' ? 'white' : 'rgb(237, 121, 229)'));
    }, 500);

    return () => clearInterval(intervalId);
  }, []);
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
  
      <div
        style={{
          backgroundColor: backgroundColor, 
          color: '#333',
          textAlign: 'center',
          padding: '10px',
          fontSize: '18px',
          fontFamily: 'copperplate',
        }}
      >
        ¡Envío gratis en pedidos superiores a $50.000!
      </div>
      {showPopup && (
        <PopupAd imageUrl={AD} onClose={closePopup} />
      )}
      <div className='container text-center' style={{ color: 'white' }}>
        <h1 style={{ color: 'white', fontFamily: 'Copperplate', fontSize: 100 }}>
          ¡Bienvenidos a nuestra tienda!
        </h1>

        <ControlledCarousel></ControlledCarousel>
        <Incentivos></Incentivos>
        <br></br>
        <Galeria></Galeria>
      </div>

      <br></br>

      <div
        style={{
          backgroundColor: 'white',
          color: '#333',
          textAlign: 'center',
          padding: '20px',
          fontSize: '18px',
          fontFamily: 'copperplate',
        }}
      >
        ¡Utilizando el código 2OOFF obtén un 20% de descuento en tu primera compra!
      </div>

      <Footer></Footer>
    </>
  );
}

export default HomePage;
