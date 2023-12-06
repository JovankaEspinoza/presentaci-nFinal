import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useAppState } from './AppStateContext';
import { useCarrito } from './CarritoContext';

function Navbars() {

  const alcarrito = () => {
    setMostrarComponente(true);
  }

  const { setMostrarComponente } = useAppState();
  const { setNumeroDeElementosEnCarrito, numeroDeElementosEnCarrito } = useCarrito();

  return (
    <>
      <Navbar expand="lg" data-bs-theme="dark" style={{ color: "white", backgroundColor: '#333' }}>
        
        <Container style={{ margin: '0px', display: 'flex', justifyContent: 'center', fontFamily: 'copperplate', fontSize: '24px' }}>
             <Link className="d-flex" to="/" style={{ marginRight: '30px',marginLeft: '5px', textDecoration: 'none', fontWeight: 'bold' }} onClick={() => setNumeroDeElementosEnCarrito(0)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-snail">
                  <path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" />
                  <circle cx="10" cy="13" r="8" />
                  <path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" />
                  <path d="M18 3 19.1 5.2" />
                  <path d="M22 3 20.9 5.2" />
                </svg>
                <h2 style={{ color: 'rgb(237, 121, 229)', marginLeft: '5px' }}>SpiralShop</h2>
              </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              

              <Button variant="nav-link p-0"
                onClick={() => setMostrarComponente(false)}
              >
                <Link
                  className={`nav-link `}
                  to="/productos"
                >
                  <h5>Productos</h5>
                </Link>
              </Button>

              <Button variant="nav-link"
              >
                <Link
                  className={`nav-link }`}
                  to="/contacto"
                  onClick={() => setNumeroDeElementosEnCarrito(0)}
                >
                  <h5>Contacto</h5>
                </Link>
              </Button>

              <Button variant="nav-link p-0">
                <Link
                  className={`nav-link `}
                  to="/faq"
                  onClick={() => setNumeroDeElementosEnCarrito(0)}
                >
                  <h5>FAQ's</h5>
                </Link>
              </Button>

              <Button variant="nav-link">
                <Link
                  className={`nav-link `}
                  to="/acercade"
                  onClick={() => setNumeroDeElementosEnCarrito(0)}
                >
                  <h5>
                    Nosotros
                  </h5>
                </Link>
              </Button>
            </Nav>

              <Nav  style={{ display: 'flex', justifyContent: 'center', fontFamily: 'copperplate' }}>
            
                <Button
                  className={`nav-link `}
                  style={{ color: 'black' }}
                  onClick={() => alcarrito()}
                >
                  <Link
                    className={`nav-link`}
                    to="/productos"
                  >
                    Carrito
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shopping-cart"
                    >
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                    <h5>items: {numeroDeElementosEnCarrito}</h5>
                  </Link>
                </Button>
        
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
