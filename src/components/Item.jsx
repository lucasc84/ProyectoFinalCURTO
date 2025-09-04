import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Item = ({prod}) => {
    console.log(prod)
  return (
     <Card bg = "info" border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.image}/>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
$ {prod.price},00
        </Card.Text>
        <Button variant="primary">Ver Más</Button>
      </Card.Body>
    </Card>
  )
}

export default Item
