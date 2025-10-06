import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
  <div className="fondo-seccion">
      <h1>Eror 404: Página no encontrada 🚫</h1>
      <Link className ='btn btn-primary' to="/">Volver al inicio</Link>
    </div>
  )
}

export default Error
