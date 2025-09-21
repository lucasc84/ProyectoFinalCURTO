// ItemDetail muestra el detalle de un producto seleccionado. Recibe el objeto detalle de ItemDetailContainer por props y lo renderiza.

import React from 'react'
import ItemCount from './ItemCount'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const ItemDetail = ({ detalle }) => {

  const onAdd = (cantidad) => {
    console.log(`Se agregaron ${cantidad} unidades de ${detalle?.name} al carrito`)
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
                <p>{detalle?.description}</p>
                <p>Precio: ${detalle?.price}</p>
                <p>Stock disponible: {detalle?.stock}</p>
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
