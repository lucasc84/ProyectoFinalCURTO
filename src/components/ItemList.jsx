import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div style = {{display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
      {data.map ((prod) => <Item key={prod.id} prod={prod}/>)}

    </div>
  )
}

export default ItemList
