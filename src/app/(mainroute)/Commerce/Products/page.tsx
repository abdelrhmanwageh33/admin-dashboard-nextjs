import React from 'react'
import ProductsHeader from '../../../shared/-components/Header'
import ProductGrid from '../../../shared/-components/Grid'

export default function page() {
  return (
<section className='w-[90%] mx-auto'>
<ProductsHeader/>

<ProductGrid typeName='products' />
</section>
  )
}
