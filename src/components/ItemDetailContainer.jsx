import React,{ useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/AsyncMockService'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})

// OPCION 1 - Usando la funcion que devuelve un item
useEffect (() => {
  getOneProduct ('3')
  .then ((res) => setDetalle (res))
    .catch ((error) => console.log (error))
}, [])

  return (
    <div>
      <ItemDetail detalle={detalle}/>
    </div>
  )
}

export default ItemDetailContainer
