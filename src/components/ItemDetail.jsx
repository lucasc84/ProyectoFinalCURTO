// ItemDetail muestra el detalle de un producto seleccionado. Recibe el objeto detalle de ItemDetailContainer por props y lo renderiza.

import ItemCount from './ItemCount'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Importa CartContext from "../context/CartContext"; // Ajusta la ruta si es necesario 
const ItemDetail = ({ detalle }) => {

  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    console.log(`Se agregaron ${cantidad} unidades de ${detalle?.name} al carrito`)
    addItem(detalle, cantidad) // Llamada a la función addItem del contexto para agregar el item al carrito 
  }




  return (
<div>
      <Card bg="info" border="primary" className="mx-auto my-4 w-100" style={{ maxWidth: '900px' }}>
        <Card.Body>
          <Row>
            <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
              <Card.Img variant="top" src={detalle?.image} alt={detalle?.name} style={{ maxHeight: '300px', width: 'auto' }}/>
            </Col>
            <Col xs={12} md={6}>
              <Card.Title>{detalle?.name}</Card.Title>
              <Card.Text>
                <div>{detalle?.description}</div>
                <div>Precio: ${detalle?.price}</div>
                <div>Stock disponible: {detalle?.stock}</div>
                <ItemCount stock={detalle?.stock} onAdd={onAdd}/>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetail
