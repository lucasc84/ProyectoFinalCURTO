// ItemDetail muestra el detalle de un producto seleccionado. Recibe el objeto detalle de ItemDetailContainer por props y lo renderiza.

import React from 'react'
import ItemCount from './ItemCount'
import Card from 'react-bootstrap/Card'
const ItemDetail = ({ detalle }) => {

  const onAdd = (cantidad) => {
    console.log(`Se agregaron ${cantidad} unidades de ${detalle?.name} al carrito`)
  }




  return (
    <div>

<Card bg = "info" border="primary"       className=" my-4 mx-4" 
style={{ width: 'auto' }}>
      <Card.Title>{detalle?.name}</Card.Title>
      <Card.Body>
        
        <Card.Text>

<p>{detalle?.description}</p>
<p>Precio: ${detalle?.price}</p>
<p>Stock disponible: {detalle?.stock}</p>
<ItemCount stock={detalle?.stock} onAdd={onAdd}/>

        </Card.Text>
                <Card.Img variant="top" src={detalle?.image} alt = {detalle?.name}/>

        </Card.Body>
    </Card>


    </div>
  )
}

export default ItemDetail
