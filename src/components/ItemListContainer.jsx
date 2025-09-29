//ItemListContainer es el componente contendedor del listado de los productos. Se encarga de obtener los productos y filtrarlos por categoría si es necesario
// posee un estado y llama a la promesa que trae el lsitado de productos, la trata y la guarda en un listado
// tambien esucha el cambio de la categoria por params, si existe filtra, sino muestra todos los productos
//hecho, se la pasa a su hijo ItemList para que los renderice

import { useState, useEffect} from 'react'
import {getProducts} from '../mock/AsyncMockService'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

const ItemListContainer = ({mensaje}) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState (false)

    const {type} = useParams()
    console.log('categoria', type)

    useEffect(() => {
        setLoading (true)
        getProducts()
        .then((res) => {
            if (type) {
                // si type existe, filtrar
                setData (res.filter (prod => prod.category === type))
            } else {
                // si no existe, todos los productos
                setData (res)
            }
        })

        .catch ((error) => console.log (error))
        // tiene que estar a la esuchca del cambio de type

        .finally (() => setLoading (false))

    }, [type])


    console.log(data)
    return(
        <>
        {
        loading
        ? <Loader/>
        : <>
        <h1>{mensaje} {type && <span style={{textTransform: 'capitalize'}}>{type}</span>}</h1>
        <ItemList data={data}/>
    </>
    }
        </>
    )
}
  
  export default ItemListContainer