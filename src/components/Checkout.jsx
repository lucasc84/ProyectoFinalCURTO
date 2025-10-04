import { serverTimestamp } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'
import EmptyCart from './EmptyCart' // Asegúrate de tener este componente

const Checkout = () => {
  const [buyer, setBuyer] = useState({})
  const [checkMail, setCheckMail] = useState('')
  const [orderId, setOrderId] = useState(null)

  const { cart, total, clear } = useContext(CartContext)

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  const finalizarCompra = (e) => {
    e.preventDefault()
    if (!buyer.name || !buyer.lastname || !buyer.email || !buyer.address) {
      alert('Complete los campos!')
    } else if (buyer.email !== checkMail) {
      alert('Los correos no coinciden!')
    } else {
      let order = {
        comprador: buyer,
        compras: cart,
        total: total(),
        fecha: serverTimestamp()
      }
      const ventas = collection(db, "orders")
      addDoc(ventas, order)
        .then((res) => {
          setOrderId(res.id)
          clear()
        })
        .catch((error) => console.log(error))
    }
  }

  if (!cart.length && !orderId) {
    return <EmptyCart />
  }

  return (
    <>
      {
        orderId ?
          <h2>
            Gracias por su compra! Su número de orden es: {orderId}
          </h2>
          :
          <div>
            <h1>Complete el formulario con sus datos</h1>
            <form onSubmit={finalizarCompra}>
              <input name="name" className="form-control" placeholder="Ingrese su nombre" type="text" onChange={buyerData} />

              <input name="lastname" className="form-control" placeholder="Ingrese su apellido" type="text" onChange={buyerData} />

              <input name="address" className="form-control" placeholder="Ingrese su dirección de envio" type="text" onChange={buyerData} />

              <input name="email" className="form-control" placeholder="Ingrese su correo" type="email" onChange={buyerData} />

              <input name="second-email" className="form-control" placeholder="Repita su correo" type="email" onChange={(e) => setCheckMail(e.target.value)} />
              <button className="btn btn-primary" type="submit">Completar Compra</button>


            </form>
          </div>
      }
    </>

  )
}




export default Checkout
