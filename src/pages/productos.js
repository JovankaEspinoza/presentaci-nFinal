import React from 'react';
import { useState } from 'react';
import Cart2 from './componentes/Cart2';
import CardContainer from './componentes/CardContainer';
import Footer from './componentes/Footer';


import { useAppState} from './componentes/AppStateContext';


function Productos() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
  const {mostrarComponente } = useAppState();
  const [UnProducto, setUnProducto] = useState([]);



if (!mostrarComponente) {
    return (
      <> 

        <CardContainer
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          UnProducto={UnProducto}
          setUnProducto={setUnProducto}
          />
        
          
        
        <Footer></Footer>

      </>
    );
  }


    return (
    <>
        <Cart2
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts} />
            

        <Footer></Footer>
    </>

    );
}

export default Productos;