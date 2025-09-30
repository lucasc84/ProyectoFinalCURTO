// ItemDetailContainer posee un estado para guardar el detalle del producto que se va a mostrar
// usa useParams para leer el id que viene en la URL
// usa useEffect para llamar a la promesa que trae el producto segun el id
// le pasa el detalle a su hijo ItemDetail

import React,{ useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {getOneProduct} from '../mock/AsyncMockService'
import {useParams} from 'react-router-dom'
import Loader from './Loader'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase' 

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [loading, setLoading] = useState (false)
    const {invalid, setInvalid} = useState (null)

    //para traer un dato dinamico de ña URL uso useParams
    const {id} = useParams()


    //FIREBASE
    useEffect (() => {
      setLoading (true)
      const docRef = doc (db, 'productos', id)
      // tramoes el documento
      getDoc (docRef)
      .then((res) => {
        if(res.data()) {
          setDetalle ({
            id: res.id,
            ...res.data()
          })
        } else {
          setInvalid (true)
        }
      })
      .catch ((error) => console.log (error))
      .finally (() => setLoading (false))
    }, [id])

// OPCION 1 - Usando la funcion que devuelve un item
// useEffect (() => {
//   setLoading (true)
//   getOneProduct (id)
//   .then ((res) => setDetalle (res))
//     .catch ((error) => console.log (error))
//     .finally (() => setLoading (false))
// }, [id]);


// OPCION 2 - reutilizando la funcion de item list container (es mejor, se escribe menso codigo, pero para aprender te conviene hacer una funcion nueva)

// useEffect (() => {
//   getProducts ()
//   .then ((res) => setDetalle (res.find (prod => prod.id === '3')))
//     .catch ((error) => console.log (error))
// }, [])

  return (
     <>
        {
        loading
        ? <Loader/>
        : <>
      <ItemDetail detalle={detalle}/>
    </>
    }
        </>
    )
}

export default ItemDetailContainer
