'use client'
import { useProducts } from '@/app/hooks/useproduct'
import React from 'react'
import ProductsTableBody from './TableBody'
import { Product } from '@/lib/type/Product.type'
import { getProducts } from '@/app/service/Product.service'

type ProductGridProps = {
  typeName: string; // endpoint name
};

export default function ProductGrid({ typeName }: ProductGridProps) {
  const { data, isLoading, error } = useProducts(
    typeName,
    () => getProducts(typeName) // هنا بنبعت الدالة مع الـ prop
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className='w-full'>
      {data?.map((allProduct: Product) => (
        <ProductsTableBody key={allProduct.id} products={allProduct} />
      ))}
    </div>
  )
}