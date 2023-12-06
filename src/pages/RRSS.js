import React from 'react';
import fb from './componentes/fotos/LOGOS/facebook.png'

const SocialIcons = () => {
  return (
    <div className="site-footer__social-icons">
      <div className="social-icon">
        <a target="_blank" rel="noopener noreferrer" aria-label="Facebook" href="%PUBLIC_URL%/images/facebook.png">
          <img loading="lazy" src={fb} alt="Facebook" width="30" height="30" />
        </a>
      </div>
      {/* Repite el mismo patrón para otras imágenes */}
    </div>
  );
};

export default SocialIcons;
