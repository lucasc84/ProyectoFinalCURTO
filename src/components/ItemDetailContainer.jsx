import React,{ useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {getOneProduct} from '../mock/AsyncMockService'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})

    //para traer un dato dinamico de ña URL uso useParams
    const {id} = useParams()

// OPCION 1 - Usando la funcion que devuelve un item
useEffect (() => {
  getOneProduct (id)
  .then ((res) => setDetalle (res))
    .catch ((error) => console.log (error))
}, [id]);


// OPCION 2 - reutilizando la funcion de item list container (es mejor, se escribe menso codigo, pero para aprender te conviene hacer una funcion nueva)

// useEffect (() => {
//   getProducts ()
//   .then ((res) => setDetalle (res.find (prod => prod.id === '3')))
//     .catch ((error) => console.log (error))
// }, [])

  return (
    <div>
      <ItemDetail detalle={detalle}/>
    </div>
  )
}

export default ItemDetailContainer
