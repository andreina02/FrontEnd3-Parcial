import React from 'react'

const Card = ({ nombre, cantante }) => {
  
  return (
  <div>
    <h2>Datos ingresados:</h2>
    <h3>Nombre{nombre}</h3>
    <h3>Cantante favorito {cantante}</h3>
  </div>
  )
}


export default Card