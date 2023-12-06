import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Card as BootstrapCard } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

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
        <Offcanvas.Header closeButton style={{backgroundColor:'rgb(237, 121, 229)'}}>
          <Offcanvas.Title >Detalles del producto:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
        
          
          <div class="card">
            <BootstrapCard.Img variant="top" src={producto.image} style={{ width: '13rem' , height:'13rem', margin:'4rem'}} />
              <ListGroup>
              <ListGroup.Item variant="dark"><h5 class="card-title">Titulo:</h5></ListGroup.Item>
                <ListGroup.Item variant="light">
                  
                  <h6 class="card-tex text-muted">{producto.title}</h6>
                </ListGroup.Item>
                <ListGroup.Item variant="dark"><h5 class="card-title">Precio:</h5></ListGroup.Item>
                <ListGroup.Item variant="light">
                  <h6 class="card-text text-muted" >{producto.price}</h6>
                </ListGroup.Item>
                <ListGroup.Item variant="dark"><h5 class="card-title">Categoria:</h5></ListGroup.Item>
                <ListGroup.Item variant="light">
                  <h6 class="card-text text-muted">{producto.category}</h6>
                </ListGroup.Item>
                <ListGroup.Item variant="dark"><h5>Descripcion:</h5></ListGroup.Item>
                <ListGroup.Item variant="light">
                  <h6 class="card-text text-muted">{producto.description}</h6>
                </ListGroup.Item>
              </ListGroup>
            
          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Offcanva;