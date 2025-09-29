import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div style= {{width: '100%', height : '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Spinner animation="grow" variant="primary" />
    </div>
  )
}

export default Loader
