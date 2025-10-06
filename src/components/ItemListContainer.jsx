//ItemListContainer es el componente contendedor del listado de los productos. Se encarga de obtener los productos y filtrarlos por categoría si es necesario
// posee un estado y llama a la promesa que trae el lsitado de productos, la trata y la guarda en un listado
// tambien esucha el cambio de la categoria por params, si existe filtra, sino muestra todos los productos
//hecho, se la pasa a su hijo ItemList para que los renderice

import { useState, useEffect} from 'react'
// import { getProducts, productos } from "../mock/AsyncMockService"
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase"
import '../components/css/ItemListContainer.css';


const ItemListContainer = ({mensaje}) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState (false)

    const {type} = useParams()
    console.log('categoria', type)

    //FIREBASE
    useEffect(() => {
        setLoading (true)
        //conectar a la base de datos
        const prodCollection = type
        ? query (collection (db, 'productos'), where ('category', '==', type))
        : collection (db, 'productos')
        //pedir los datos (documentos) de la coleccion
        getDocs (prodCollection)
        .then ((res) => {
            console.log (res.docs, 'docs')
            const list = res.docs.map ((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setData (list)
        })    
        .catch ((error) => console.log (error))
        .finally (() => setLoading (false))
    }, [type])



// PROMESA
//     useEffect(() => {
//         setLoading (true)
//         getProducts()
//         .then((res) => {
//             if (type) {
//                 // si type existe, filtrar
//                 setData (res.filter (prod => prod.category === type))
//             } else {
//                 // si no existe, todos los productos
//                 setData (res)
//             }
//         })

//         .catch ((error) => console.log (error))
//         // tiene que estar a la esuchca del cambio de type

//         .finally (() => setLoading (false))

//     }, [type])


    console.log(data)

    return(
  <div className="fondo-seccion">

        {
        loading
        ? <Loader/>
        : <>
        <h1 className="mensaje-bienvenida">{mensaje} {type && <span style={{textTransform: 'capitalize'}}>{type}</span>}</h1>
        <ItemList data={data}/>
    </>
    }
        </div>
    )
}
  
  export default ItemListContainer