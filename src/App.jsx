import './App.css'
import Card from './Components/Card'

import React, { useState } from 'react';

function App() {

  const [nombre, setNombre] = useState('');
  const [cantante, setCantante] = useState('');
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.trim().length < 3) {
      setError('Por favor chequea que la información sea correcta');
      setSubmittedData(null);
      return;
    }

    if (cantante.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setSubmittedData(null);
      return;
    }

    setError('');
    setSubmittedData({ nombre, cantante });
  };

  return (
    <div>
      <h1>Tematica musical</h1>
      <form onSubmit={handleSubmit}>
        <label> Indica tu nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(event) => setNombre( event.target.value)}
          />
        
        <br />
        <label> Cual es tu cantante favorito?</label>
          <input
            type="text"
            value={cantante}
            onChange={(event) => setCantante(event.target.value)}
          />
        
        <br />
        <button>Enviar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {submittedData && <Card nombre={submittedData.nombre} cantante={submittedData.cantante} />}
    </div>
  );
};



export default App
