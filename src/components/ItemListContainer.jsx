import { useState, useEffect} from 'react'
import {getProducts} from '../mock/AsyncMockService'
import ItemList from './ItemList'

const ItemListContainer = ({mensaje}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        getProducts()
        .then((res) => setData (res))
        .catch ((error) => console.log (error))

    }, [])


    console.log(data)
    return(
    <div>
        <h1>{mensaje}</h1>
        {/* {data.map (prod => <p key={prod.id}>{prod.name}</p>)} */}
        <ItemList data={data}/>
    </div>
    )
  }
  
  export default ItemListContainer