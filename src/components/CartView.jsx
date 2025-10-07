import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import './css/CartView.css'

const CartView = () => {
    const {cart, clear, removeItem, total}= useContext (CartContext)

  return (
    <div>
      <h1>Carrito</h1>

        <div>
        {
        cart.map((compra) => (
            <div key={compra.id} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }} >
<img
  src={compra.image}
  alt={compra.name}
  className="cart-img"
  style={{width: '7rem', margin: '1rem'}}
/>
            <span>{compra.name}</span>
            <span>${compra.price}</span>
            <span>Cantidad: {compra.quantity}</span>
            <span>Subtotal: ${compra.quantity * compra.price}</span>
            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>Eliminar</button>
    </div>
        ))
    }
  </div>

    <span>Total: ${total()}</span>
    <div  style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '1rem'}}>
        <button className= 'btn btn-danger' onClick={() => clear()}>Vaciar carrito</button>
        <Link to = '/checkout' className = 'btn btn-success'>Terminar Compra</Link>
    </div>
    </div>
  )
}

export default CartView
