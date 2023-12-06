// ComponentePadre.js
import React, { useState } from 'react';
import Cardproducto from './Cardproducto';
import ListaProductos from './ListaProductos';

function ComponentePadre() {
  const [productos, setProductos] = useState([]);

  const agregarAlCarrito = (nombre, precio) => {
    // Agrega el producto a la lista
    setProductos([...productos, { nombre, precio }]);
  };

  return (
    <div>
<Cardproducto onAgregarAlCarrito={agregarAlCarrito} />

      <ListaProductos productos={productos} />
    </div>
  );
}

export default ComponentePadre;
