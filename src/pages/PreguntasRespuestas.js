import React from 'react';

import Footer from './componentes/Footer';
import CardFAQ from './componentes/CardFAQ';

function PreguntasRespuestas() {
  return (
    <>

      <div className='container bg-light p-3'>
        <div className='row p-3'>
          <div className='col-8 m-2 p-3'>
            <h1 style= {{fontFamily:'copperplate'}}>Preguntas frecuentes (FAQ):</h1>
            <br></br>
            <CardFAQ pregunta="¿Cuál es la política de devoluciones?" respuesta= 'Nuestra politica de devolucion asegura la mejor experiencia, dentro de los primeros 7 dias desde la entrega de tu producto puedes contactarnos via mail para gestionar el retiro del producto, esto posterior a la evaluacion de la devolución'></CardFAQ>
            <br></br>
            <CardFAQ pregunta= '¿Cuáles son los métodos de pago aceptados? ' respuesta='Contamos con un sistma altamente seguro de pago en linea. Podrás realziar el aogo con tus tarjeta de crédito, prepago o debito'></CardFAQ>
            <br></br>
            <CardFAQ pregunta="¿Cómo puedo realizar un seguimiento de mi pedido?" respuesta= 'Una vez confirmado el pago, recibirás en tu correo un código de seguimiento con el que podrás conocer el estado de tu orden'></CardFAQ>
            <br></br>
            <CardFAQ pregunta="¿Cuánto cuesta el envío?" respuesta= 'Dependiendo del total de tu compra. Cualquier pedido sobre $50.000 es gratis el envío'></CardFAQ>
            <br></br>
            <CardFAQ pregunta="¿Cúales son los tiempos estimados de entrega?" respuesta= 'Los tiempos de entrega varian del tamaño de tu pedido y de la contingecia. Usualamente no tarda mas de 10 días'> </CardFAQ>
          </div>
        </div>
        <div className='row p-5'></div>
      </div>

      
      <Footer></Footer>
    </>
  );
}

export default PreguntasRespuestas;
