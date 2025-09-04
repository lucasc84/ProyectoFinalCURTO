import { useState, useEffect, use } from 'react'
import {getProductos} from '../mock/AsyncMockService'

const ItemListContainer = ({mensaje}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        getProductos()
        .then((res) => console.log (res))

    }, [])


    console.log(' ItemListContainer' )
    return(
    <div>
        <h1>{mensaje}</h1>
    </div>
    )
  }
  
  export default ItemListContainer