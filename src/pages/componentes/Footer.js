import React from 'react';
import facebookIcon from './fotos/LOGOS/facebook.png';  
import ig from './fotos/LOGOS/instagram-2.png';
import tt from './fotos/LOGOS/tik-tok.png'

function Footer() {
  return (
    <div className="bg-dark" style={{color:'white'}}>
      <div className='container'>


        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li  style = {{color: 'white'}} className="nav-item mb-2">
                  <a style = {{color: 'white'}} href="/#" className="nav-link p-0 ">
                    Home
                  </a>
                </li>
              
              </ul>
            </div>

            <div className="col-md-6 offset-md-1 mb-3">
              <form>
                <h5 >Subscribete a nuestro newsletter</h5>
                <p>Recibirás información, noticias y descuentos cada mes</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button style={{ color: 'rgb(237, 121, 229)' , border: 'solid rgb(237, 121, 229) '}} className="btn btn-dark" type="button">
                    Subscribrse
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p style={{ color: 'rgb(237, 121, 229)' }}>© 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
             
              <li className="ms-3">
                <a className="link-light" href="https://es-la.facebook.com/">
                  <img src={facebookIcon} alt="Facebook" width="24" height="24" />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="https://www.tiktok.com">
                  <img src={tt} alt="Twitter" width="24" height="24" />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="https://www.instagram.com">
                  <img src={ig} alt="Instagram" width="24" height="24" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
