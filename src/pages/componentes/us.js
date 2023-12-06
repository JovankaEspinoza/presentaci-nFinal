import React from 'react';
import f1 from './fotos/yo.jpeg';
import f2 from './fotos/jova.jpg';

const imagenes = [
  
  f1 ,
  f2
 

 
];

const Galeria = () => {
    return (
      <section id="pics" className="GALERIA">
      
        <div className="contenedor" style = {{display: 'flex' , justifyContent: 'center', alignItems: 'center', flexWrap : ' wrap'}}>
          {imagenes.map((imagen, index) => (
            <img
              key={index}
              src={imagen}
              alt={`Imagen${index + 1}`}
              className="imagen-click"
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default Galeria;
