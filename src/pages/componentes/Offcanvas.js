import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Card as BootstrapCard } from 'react-bootstrap';

const Offcanva = (props) => { 
    
    const producto = props.producto;
    
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{backgroundColor:"rgb(237, 121, 229)"}} onClick={handleShow}>
        Detalles
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Detalles del producto:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
        
        <BootstrapCard.Img variant="top" src={producto.image} style={{ width: '13rem' , height:'13rem'}} />

          <ul>
            <li>
              <h4>titulo:</h4>
                <h6>{producto.title}</h6>
            </li>
            <li>
              <h4>precio:</h4>
              <h6>{producto.price}</h6>
            </li>
            <li>
              <h4>categoria:</h4>
              <h6>{producto.category}</h6>
            </li>
            <li>
              <h4>descripcion:</h4>
              <h6>{producto.description}</h6>
            </li>
            
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Offcanva;