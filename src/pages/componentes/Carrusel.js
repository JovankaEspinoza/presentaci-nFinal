import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import foto2 from './fotos/ft1.png'
import foto4 from './fotos/ft.png'
import foto from './fotos/ft2.png'
import React  from 'react';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={foto2} class="d-block w-100" alt="..."/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={foto} class="d-block w-100" alt="..."/>
        <Carousel.Caption>
          
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={foto4} class="d-block w-100" alt="..."/>
        <Carousel.Caption>
          <h3>l</h3>
          <p>
            .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;