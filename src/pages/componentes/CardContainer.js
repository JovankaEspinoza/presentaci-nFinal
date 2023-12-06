import React from 'react';
import CardTop from './CardTop';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Card as BootstrapCard } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useCarrito } from './CarritoContext';

import Offcanva from './Offcanvas';


const CardContainer = ({
    allProducts,
    setAllProducts,
    countProducts,
	setCountProducts,
	total,
	setTotal, 
    })=>{

    const [contador, setContador] = useState(1);
    const onAddProduct = product => {
		
        const productoConOrden = { ...product, orden: contador };
		setTotal(total + product.price);
		setCountProducts(countProducts + 1);
		setAllProducts([...allProducts, productoConOrden]);
        agregarAlCarrito(countProducts);
        setContador(contador + 1);
	};



        

   




    const { actualizarCarrito } = useCarrito();
    
    
   
      
    const agregarAlCarrito = (countProducts) =>{

          actualizarCarrito(countProducts + 1);
        };
      


    const handleAmbasFunciones = product => {
            onAddProduct(product);
            
            
          };
    const [products, setProducts] = useState([]);
    const [categoria, setcategoria] = useState('electronics');
    


    useEffect(() => {
        axios
        .get('https://fakestoreapi.com/products')
        .then((response) => {
        setProducts(response.data);
        })
        .catch((error) => {
        console.error('Error al cargar productos:', error);
        });
    }, []);
    const productosFiltrados = products.filter(producto => producto.category === categoria);



    return (
        <>
        <CardTop></CardTop>
        <div  className='container bg-light p-3' >
        <Nav variant="tabs" >
        <Nav.Item >
            <Nav.Link style= {{color:'rgb(237, 121, 229)'}} eventKey="link-1" onClick={() => setcategoria('electronics')}>Electronica</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link style= {{color:'rgb(237, 121, 229)'}}  eventKey="link-2" onClick={() => setcategoria('jewelery')}>Joyeria</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link style= {{color:'rgb(237, 121, 229)'}}  eventKey="link-3" onClick={() => setcategoria("men's clothing")}>Hombre</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link  style= {{color:'rgb(237, 121, 229)'}} eventKey="link-4" onClick={() => setcategoria("women's clothing")}>Mujer</Nav.Link>
        </Nav.Item>
        </Nav>

   

            <div className='row'>
                <div className='col-sm-1 m-1'>
                </div>
                <div className='col-sm-10 m-1'>
                    <div className='row m-4 d-flex'>
                        <div>
                            {productosFiltrados.map((product) => (
                                            <div className='col-sm-4 d-inline-flex' key={product.id}>
                                                <BootstrapCard style={{ width: '20rem' , height:'36rem'}}>
                                                    <br></br>
                                                    <div className='d-flex justify-content-center m-2'>
                                                        <BootstrapCard.Img variant="top" src={product.image} style={{ width: '13rem' , height:'13rem'}} />
                                                    </div>
                                                    <BootstrapCard.Body>
                                                        <div>
                                                            <div className='row'>
                                                                <div className='col-12'style={{ width: '20rem' , height:'7rem'}}>
                                                                    <h5 class="card-title text-align-center d-flex justify-content-center">{product.title}</h5>
                                                                </div>
                                                            </div>
                                                            <div style={{
                                                                backgroundcolor:"#EAE2E0"}}>
                                                                <h5 class="card-title text-align-center d-flex justify-content-center">{product.price}$</h5>
                                                                <br></br>
                                                                 <Offcanva producto={product}/>

                                                                
                                                                <button style= {{backgroundColor:'rgb(237, 121, 229)'}} class="btn  d-flex justify-content-center m-2" onClick={() => handleAmbasFunciones (product)}>Añadir al carrito</button>
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                    </BootstrapCard.Body>
                                                </BootstrapCard>
                                          </div>
                            ))}
                        </div>   
                    </div>

                </div>

            
            </div>
        </div>
    </>
	);
};

export default CardContainer; 

