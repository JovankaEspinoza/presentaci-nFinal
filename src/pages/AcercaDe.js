import React from 'react';

import Footer from './componentes/Footer';
import Us from './componentes/us';


function AcercaDe() {
    return (
        <>

          <fotos></fotos>
          <div className='container bg-light p-3'>
            <div className='row p-3'>
                <div className='col-2'>
                </div>
                <div className='col-8 text-center'>
                  <h1 style={{fontFamily: 'copperplate'}}>Quiénes somos</h1>
                </div>
            </div>
            <div className='row p-5'>
              
              <p style={{fontFamily: 'copperplate'}}>Somos Francisco Faba y Jovanka espinoza y nos emociona presentarles nuestra plataforma de venta en línea de productos, una iniciativa creada por estudiantes comprometidos con la excelencia académica.

En nuestro sitio web, encontrarás una amplia variedad de productos cuidadosamente seleccionados para satisfacer tus necesidades y preferencias. Desde productos electrónicos hasta moda, hogar y más, nos esforzamos por ofrecer una experiencia de compra completa y conveniente. </p>

            </div>




            <div className='row p-5'>
           



            <Us></Us>




            </div>
            <div className='row p-5'>

            </div>
            <div className='row p-5'>


            </div>
            <div className='row p-5'>

            </div>
          </div>
          <Footer></Footer>
          
        </>

    );
}



export default AcercaDe;