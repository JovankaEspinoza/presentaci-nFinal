import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function CardFAQ({ pregunta , respuesta}) {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  const toggleRespuesta = () => {
    setMostrarRespuesta(!mostrarRespuesta);
  };

  return (
    <Card>
      <Card.Header style= {{color: "white",backgroundColor : "#333", fontFamily:'copperplate'}} onClick={toggleRespuesta}>
      {pregunta}
      </Card.Header>
      {mostrarRespuesta && (
        <Card.Body>
          <Card.Text style= {{color: "#333", boxShadow: '0 4px 4px rgb(240, 54, 228)'}}>
            {respuesta}
          </Card.Text>
        </Card.Body>
      )}
    </Card>
  );
}

export default CardFAQ;

