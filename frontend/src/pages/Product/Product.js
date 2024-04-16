import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductMiddle from '../../components/ProductMiddle.js/ProductMiddle'

function Product() {
  return (
    <div>
      <NavBar/>
      <div className='flex'>
        <Sidebar/>
        <ProductMiddle/>
      </div>
    </div>
  )
}

export default Product
