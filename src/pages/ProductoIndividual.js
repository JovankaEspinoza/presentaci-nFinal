import React from 'react';
import Cardproducto from './componentes/Cardproducto';
import Footer from './componentes/Footer';


const ProductoIndividual = () =>{
    return (
        <>
          <div className='container bg-light p-3'>
                <div className='row p-3'>
                    <div className='col-1'>

                    </div>
                    <div className='col-10'>
                        <Cardproducto></Cardproducto>
                        <p>Dato compartido en Componente: </p>
                    </div>
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

export default ProductoIndividual;