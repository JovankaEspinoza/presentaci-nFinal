
import React from 'react';

function ListaProductos({ productos }) {
  return (
    <div>
      <h2>Lista de Productos en el Carrito</h2>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>{`${producto.nombre} - $${producto.precio}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProductos;
