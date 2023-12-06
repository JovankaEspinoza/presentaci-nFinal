import React, { useState } from 'react';


const PopupAd = ({ imageUrl, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {isVisible && (
        <div style={{ position: 'fixed', top: '50px', right: 0, backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', zIndex: 999 }}>
          <img src={imageUrl} alt="Popup Ad" style={{color:'white', maxWidth: '100%', maxHeight: '100%', cursor: 'pointer' }} onClick={handleClose} />
          <p style={{ textAlign: 'center', marginTop: '0px', fontSize: '14px', color: 'white', backgroundColor:'black' }}>click para cerrar anuncio!</p>
          
          <div style={{ position: 'absolute', top: '25px', right: '5px', cursor: 'pointer', color:'white' }} onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupAd;
