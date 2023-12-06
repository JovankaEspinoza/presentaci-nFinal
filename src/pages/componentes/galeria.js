import React from 'react';
import f1 from './fotos/galeria/tch.jpeg';
import f2 from './fotos/galeria/zapatos.jpeg';
import f3 from './fotos/galeria/ropaa.jpeg';
import f4 from './fotos/galeria/tech2.jpeg';
const imagenes = [
  
  f1 ,
  f2, 
  f3,
  f4

 
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
