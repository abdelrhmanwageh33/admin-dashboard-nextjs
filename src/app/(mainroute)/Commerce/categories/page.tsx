import ProductGrid from '@/app/shared/-components/Grid'
import ProductsHeader from '@/app/shared/-components/Header'
import React from 'react'

export default function page() {
  return (

<section className='w-[90%] mx-auto'>
<ProductsHeader/>

<ProductGrid typeName='categories' />
</section>
  )
}
