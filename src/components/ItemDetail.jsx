// ItemDetail muestra el detalle de un producto seleccionado. Recibe el objeto detalle de ItemDetailContainer por props y lo renderiza.

import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ detalle }) => {

  const onAdd = (cantidad) => {
    console.log(`Se agregaron ${cantidad} unidades de ${detalle?.name} al carrito`)
  }




  return (
    <div>
<h2>Detalle de: {detalle?.name}</h2>
<img src={detalle?.image} alt={detalle?.name}/>
<p>{detalle?.description}</p>
<p>Precio: ${detalle?.price}</p>
<p>Stock disponible: {detalle?.stock}</p>
<ItemCount stock={detalle?.stock} onAdd={onAdd}/>


    </div>
  )
}

export default ItemDetail
