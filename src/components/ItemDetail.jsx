import React from 'react'

const ItemDetail = ({ detalle }) => {
  return (
    <div>
<h2>Detalle de: {detalle.name}</h2>
<img src={detalle.image} alt={detalle.name}/>
<p>{detalle.description}</p>
<p>Precio: ${detalle.price}</p>
<p>Stock disponible: {detalle.stock}</p>


    </div>
  )
}

export default ItemDetail
