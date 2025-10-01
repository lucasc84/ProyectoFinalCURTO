import React from 'react'

const EmptyCart = () => {
  return (
    <div>
      <h2 className= 'text-center'>El carrito esta vacio</h2>
      <h3 className= 'text-center'>Chequeá nuestros productos</h3>
      <Link className ='btn btn-primary' to="/"> Ver productos</Link>
    </div>
  )
}

export default EmptyCart
