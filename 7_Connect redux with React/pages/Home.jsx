import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../components/Products'


function Home() {
 const ProductList=useSelector((state)=>state)
  return (
    <div  className="root_container">
    {ProductList.products.map((product) => (
      <Products
        productId={product.id}
        key={product.id}
        title={product.title}
        image={product.image}
        rate={product.rating.rate}
        price={product.price}
      />
    ))}
    </div>
  )
}

export default Home