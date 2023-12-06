import React from 'react';


function CardTop() {
  const tiendaTexto = "¡Bienvenido a nuestra tienda en línea! Descubre una amplia variedad de productos de las mejores marcas";


  return (
    <>
      <h4 style={{margin:'0px', padding:"1rem", backgroundColor: '#333',fontFamily:'copperplate', color:'white',textAlign:'center'}}>¡Explora Nuestra Tienda!</h4>
        

        <h6 style={{margin:'0px', padding:"1rem", backgroundColor: 'rgb(157, 155, 160)',fontFamily:'copperplate',textAlign:'center',}}> {tiendaTexto}</h6>


      
    
    </>
    

  );
}

export default CardTop;
