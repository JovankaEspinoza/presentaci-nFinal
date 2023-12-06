import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Imagen from './fotos/box.png';
function Cardproducto() {






  
  return (
    <Card>
      <Card.Header as="h5">Producto</Card.Header>
      <Card.Body>
        <div class="card w-80 h-80">
            <div class="row">
                <div className='col-4'>
                    <img src={Imagen} class=" w-2 card-img-top p-4 " style={{height:'200px',width:'200px'}}alt="..."/>
                </div>
                <div className='col-8'>
                    <br></br>
                    <h6>Descripcion:</h6>
                    <p>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
                    </p>
                </div>
            </div>
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Procesador: Intel Core i5</li>
                <li class="list-group-item">Modelo tarjeta de video: Gráficos</li>
                <li class="list-group-item">Tamaño de la pantalla: 14 pulgadas</li>
                <li class="list-group-item">Disco duro HDD: No tiene</li>
                <li class="list-group-item">Unidad de estado sólido SSD: 512GB</li>
            </ul>
        </div>
        
        <br></br>
        <Card.Title>Precio: $ 549.990</Card.Title>
        <br></br>
        <Button color="warnin">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardproducto;